from fastapi import APIRouter, File, UploadFile
from typing import List, Union, Optional
from pydantic import BaseModel, Field, validators, field_validator
from datetime import date
import os

app05 = APIRouter()

@app05.post("/file")
async def get_file(file: bytes = File()):
    # 适合小文件上传
    print("file", file)
    return {
        "file": len(file)
    }

@app05.post("/files")
async def get_files(files: List[bytes] = File()):
    for file in files:
        print(len(file))
    return {
        "file": len(files)
        #返回的是上传文件的数量
    }

@app05.post("/uploadFile")
async def get_file(file: UploadFile):
    print("file", file)
    path = os.path.join("/Users/eamon/EamonLearn/PersonalProject/07 请求与相应/images", file.filename)
    
    with open(path, "wb") as f:
        for line in file.file:
            f.write(line)

    return {
        "file": file.filename,
    }

@app05.post("/uploadFiles")
async def get_files(files: List[UploadFile]):
    print("file", files)

    return {
        "names": [file.filename for file in files]
    }