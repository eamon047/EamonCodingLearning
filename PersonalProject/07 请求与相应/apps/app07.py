from fastapi import APIRouter, File, UploadFile, Request
from typing import List, Union, Optional
from pydantic import BaseModel, Field, validators, field_validator, EmailStr

app07 = APIRouter()

class UserIn(BaseModel):
    username: str
    password: str
    email: EmailStr
    full_name: Union[str, None] = None

class UserOut(BaseModel):
    username: str
    email: EmailStr
    full_name: Union[str, None] = None

class Item(BaseModel):
    name: str
    description: Union[str, None] = None
    price: float
    tax: float = 10.5
    tags: List[str] = []

items = {
    "foo": {"name": "Foo", "price": 50.2},
    "bar": {"name": "Bar", "description": "The bartenders", "price": 62, "tax": 20.2},
    "baz": {"name": "Baz", "description": None, "price": 50.2, "tax": 10.5, "tags": []},
}

@app07.post("/user07", response_model=UserOut)
def create_user(user: UserIn):
    # 存到数据库
    return user


# @app07.get("/items/{item_id}", response_model=Item, response_model_exclude_unset=True)
# @app07.get("/items/{item_id}", response_model=Item, response_model_include={"name", "price"}, )
# @app07.get("/items/{item_id}", response_model=Item, response_model_exclude={"description"}, )
@app07.get("/items/{item_id}", response_model=Item)
async def read_item(item_id: str):
    return items[item_id]