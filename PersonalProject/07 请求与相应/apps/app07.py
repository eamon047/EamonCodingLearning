from fastapi import APIRouter, File, UploadFile, Request
from typing import List, Union, Optional
from pydantic import BaseModel, Field, validators, field_validator, EmailStr

app07 = APIRouter()

class UserIn(BaseModel):
    username: str
    password: str
    email: EmailStr
    full_name: Union[str, None] = None

@app07.post("/user")
def create_user(user: UserIn):
    # 存到数据库
    return user