from fastapi import APIRouter

app01 = APIRouter()

@app01.get("/user01")
def get_user():
    return {"user_id": "user_id"}

@app01.get("/user01/1")
def get_user():
    return {"user_id": "root user"}

@app01.get("/user01/{user_id}")
def get_user(user_id: int):
    print("user_id", user_id)
    return {"user_id": user_id}
