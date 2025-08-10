import uvicorn
from fastapi import FastAPI

app = FastAPI()

#
@app.get("/user")
def get_user():
    return {
        "user": "current user"
    }


if __name__ == '__main__':
    uvicorn.run('main:app', host='127.0.0.1', port=8030, reload=True, workers=1)
