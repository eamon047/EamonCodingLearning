import numpy as np
import matplotlib.pyplot as plt
from scipy.io import loadmat
from tqdm import tqdm

# 设置随机种子
np.random.seed(0)

# 加载数据
data = loadmat('IMAGES.mat')
images = data['IMAGES']

def extract_random_patches(images, patch_size=(12, 12), num_patches=5):
    """提取多个随机补丁"""
    patches = []
    img_height, img_width, num_images = images.shape
    for _ in range(num_patches):
        img_idx = np.random.randint(num_images)
        i = np.random.randint(img_height - patch_size[0] + 1)
        j = np.random.randint(img_width - patch_size[1] + 1)
        patch = images[i:i+patch_size[0], j:j+patch_size[1], img_idx]
        patches.append(patch)
    return np.array(patches)

def extract_random_patch_from_image1(images, patch_size=(12, 12)):
    """从图像中提取单个随机补丁"""
    img_idx = np.random.randint(images.shape[2])
    i = np.random.randint(images.shape[0] - patch_size[0] + 1)
    j = np.random.randint(images.shape[1] - patch_size[1] + 1)
    patch = images[i:i+patch_size[0], j:j+patch_size[1], img_idx]
    return patch

def e_step(x, lamb, lamb_mat, Y, psi):
    """E-step: 使用MAP估计"""
    # 计算梯度 (一阶导数)
    gradient = np.dot(psi.T, (Y - np.dot(psi, x))) - np.dot(lamb_mat, x)
    # 计算Hessian矩阵 (二阶导数)
    hessian = -np.dot(psi.T, psi) - np.diag(lamb)
    # 牛顿法更新
    x += np.dot(np.linalg.inv(-hessian), gradient)
    # 计算协方差矩阵
    covariance = -np.linalg.inv(hessian)
    # MAP估计
    x_map = np.dot(np.linalg.inv(np.dot(psi.T, psi) + np.diag(lamb)), np.dot(psi.T, Y))
    # 更新稀疏性参数
    lamb = 1 / np.diag(covariance + np.outer(x_map, x_map))
    lamb_mat = np.diag(lamb)
    return x, x_map, lamb, lamb_mat, covariance

def m_step(x_map, Y, covariance, psi):
    """M-step: 更新字典矩阵"""
    psi += 0.01 * (np.outer(Y, x_map) - np.dot(psi, (covariance + np.outer(x_map, x_map))))
    psi = psi / np.linalg.norm(psi, axis=0)
    return psi

# 显示所有图像
fig, axes = plt.subplots(2, 5, figsize=(10, 10))
for i, ax in enumerate(axes.flat):
    ax.imshow(images[:, :, i], cmap='gray', interpolation='nearest')
    ax.axis('off')
plt.tight_layout()
plt.show()

# 显示随机补丁
patches = extract_random_patches(images)
fig, axes = plt.subplots(1, 5, figsize=(15, 3))
for i, ax in enumerate(axes.flat):
    ax.imshow(patches[i], cmap='gray', interpolation='nearest')
    ax.axis('off')
plt.tight_layout()
plt.show()

# 训练循环
echos = 20000
psi = np.random.randn(144, 100)  # 初始化字典矩阵

for i in tqdm(range(echos)):
    x_map = None
    x = np.zeros(100)
    lamb = np.ones(100)
    lamb_mat = np.diag(lamb)
    
    # 提取并预处理补丁
    Y = extract_random_patch_from_image1(images)
    Y = Y.flatten()
    Y = (Y - np.mean(Y)) / np.std(Y)
    
    # E-step (3次迭代)
    for j in range(3):
        x, x_map, lamb, lamb_mat, covariance = e_step(x, lamb, lamb_mat, Y, psi)
    
    # M-step
    psi = m_step(x_map, Y, covariance, psi)

# 显示学习到的基向量
fig, axes = plt.subplots(10, 10, figsize=(8, 8))
for k, ax in enumerate(axes.flat):
    basis = psi[:, k].reshape(12, 12)
    ax.imshow(basis, cmap='gray', interpolation='nearest')
    ax.axis('off')

plt.tight_layout()
plt.show()