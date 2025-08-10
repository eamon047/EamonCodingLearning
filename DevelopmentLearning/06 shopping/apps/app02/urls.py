from fastapi import APIRouter

app02 = APIRouter()

@app02.get("login")
def user_login():
    return {"user": "login"}

@app02.post("reg")
def user_reg():
    return {"user": "reg"}