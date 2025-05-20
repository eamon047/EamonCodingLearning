class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        if self.root == None:
            self.root = TreeNode(value)
        else:
            self._insert(self.root, value)

    def _insert(self, node, value):
        if value < node.value:
            if node.left is None:
                node.left = TreeNode(value)
            else:
                self._insert(node.left, value)
        else:
            if node.right is None:
                node.right = TreeNode(value)
            else:
                self._insert(node.right, value)

    
    def search(self, value):
        return self._search(self.root, value)
    
    def _search(self, node, value):
        if node is None or node.value == value:
            return node
        
        if value < node.value:
            return self._search(node.left, value)
        else:
            return self._search(node.right, value)
        
    def delete(self, value):
        self.root = self._delete(self.root, value)

    def _delete(self, node, value):
        if node is None:
            return node

        if value < node.value:
            node.left = self._delete(node.left, value)
        elif value > node.value:
            node.right = self._delete(node.right, value)
        else:
            if node.left is None:
                return node.right
            elif node.right is None:
                return node.left
            
            successor = self._find_min(node.right)
            node.value = successor.value
            node.right = self._delete(node.right, successor.value)

        return node
    
    def _find_min(self, node):
        current = node
        while current.left is not None:
            current = current.left
        return current
        
    def inorder(self):
        result = []
        self._inorder(self.root, result)
        return result
    
    def _inorder(self, node, result):
        if node is not None:
            self._inorder(node.left, result)
            result.append(node.value)
            self._inorder(node.right, result)

    def preorder(self):
        result = []
        self._preorder(self.root, result)
        return result
    
    def _preorder(self, node, result):
        if node is not None:
            result.append(node.value)
            self._preorder(node.left, result)
            self._preorder(node.right, result)

    def postorder(self):
        result = []
        self._postorder(self.root, result)
        return result
    
    def _postorder(self, node, result):
        if node is not None:
            self._postorder(node.left, result)
            self._postorder(node.right, result)
            result.append(node.value)

    def display(self):
        """以简单的形式显示树结构（用于调试）"""
        lines = []
        self._display_recursive(self.root, 0, lines)
        return "\n".join(lines)

    def _display_recursive(self, node, level, lines):
        """递归构建树的文本表示"""
        if node is not None:
            self._display_recursive(node.right, level + 1, lines)
            
            # 确保lines列表有足够的位置
            while level >= len(lines):
                lines.append("")
                
            lines[level] = "    " * level + str(node.value) + lines[level]
            self._display_recursive(node.left, level + 1, lines)