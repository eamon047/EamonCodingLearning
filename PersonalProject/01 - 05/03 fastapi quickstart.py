from fastapi import FastAPI
import uvicorn

app = FastAPI()

# get: 查看
# post: 提交，添加
# put, patch: 修改，更新
# delete: 删除

@app.get("/")
def home():
    return {"users_id" : 1002}

@app.get("/shop")
def shop():
    return {"shop_id" : "商品信息"}

if __name__ == "__main__":
    uvicorn.run("03 fastapi quickstart:app", port=8000, reload=True)