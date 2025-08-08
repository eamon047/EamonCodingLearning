from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.post("/items", 
          tags=["这是一个items测试接口"],
          summary="这是关于item测试的summary",
          description="这是关于item测试的详情内容",
          response_description="这是关于item测试的响应描述",
          deprecated=True, # 是否弃用该接口
          )
def test():
    return {"items": "items数据"}


if __name__ == "__main__":
    uvicorn.run("05 路径操作装饰器方法的参数:app", port=8080, reload=True)