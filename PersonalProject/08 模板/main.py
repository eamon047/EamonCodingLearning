from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
import uvicorn
import os

app = FastAPI()
templates = Jinja2Templates(directory=os.path.join(os.path.dirname(__file__), "templates"))

###########################################
#   业务逻辑层 展示层一定分开 不要调整原始数据   #
###########################################

# 可使用过滤器用于调整数据形式，详见templates/index.html

@app.get("/index")
def index(request: Request):
    name = "root"
    age = 15
    books = ["金瓶梅", "聊斋", "剪灯新话", "国色天香"]
    info = {"name": "rain", "age": 32, "ginder":"male"}
    pai = 3.1415926
    movies = {"restricted_movie": ["悬疑", "惊悚", "恐怖"], 
              "non_restricted_movie": ["喜剧", "动画", "家庭"]}

    return templates.TemplateResponse(
        "index.html", #模板文件
        {
            "request": request,
            "user": name,
            "age": age,
            "books": books,
            "info": info,
            "pai": pai,
            "movies": movies
        }, #context上下文对象，一个字典
    )

if __name__ == '__main__':
    uvicorn.run("main:app", port = 8090, reload = True)