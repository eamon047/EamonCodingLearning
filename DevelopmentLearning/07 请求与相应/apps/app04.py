from fastapi import APIRouter, Form
from typing import List, Union, Optional
from pydantic import BaseModel, Field, validators, field_validator
from datetime import date

app04 = APIRouter()

@app04.post("/regin")
# async def data(username)  此时username为查询参数(详见app02内容)
async def reg(username: str = Form(), password: str = Form()):
    print(f"username: {username}, password: {password}")
    # 注册，实现数据库的添加操作
    return {
        "username": username
    }