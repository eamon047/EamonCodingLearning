from fastapi import APIRouter
from typing import List, Union, Optional
from pydantic import BaseModel, Field, validators, field_validator
from datetime import date

app03 = APIRouter()

class Addr(BaseModel):
    province: str
    city: str

class User(BaseModel):
    # name: str = Field(default="eamon", pattern="^e")
    name: str
    age: int = Field(default=24, gt=0, lt=100)
    birth: Union[date, None] = None
    friends: List[int] = []
    description: Optional[str] = None
    addr: Addr

    @field_validator("name")
    def name_must_alpha(cls, value):
        assert value.isalpha(), 'name must be alpha.'
        return value

class Data(BaseModel):
    data: List[User]

# 路径函数中声明不属于路径参数的参数，就是查询参数
@app03.post("/user")
async def user(user: User):
    print(user.name)
    print(user.model_dump())
    # return {}
    return user

@app03.post("/data")
async def data(data: Data):
    return data