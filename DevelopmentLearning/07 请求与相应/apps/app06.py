from fastapi import APIRouter, File, UploadFile, Request
from typing import List, Union, Optional
from pydantic import BaseModel, Field, validators, field_validator

app06 = APIRouter()

@app06.post("/items")
async def items(request: Request):
    print("URL: ", request.url)
    print("客户端的IP地址: ", request.client.host)
    print("客户端宿主: ", request.headers.get("user-agent"))
    print("cookies: ", request.cookies)


    return {
        "URL: ": request.url,
        "客户端IP地址: ": request.client.host,
        "客户端宿主: ": request.headers.get("user-agent"),
        "cookies: ": request.cookies
    }