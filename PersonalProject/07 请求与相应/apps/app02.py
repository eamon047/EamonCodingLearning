from fastapi import APIRouter
from typing import Union, Optional

app02 = APIRouter()

# 路径函数中声明不属于路径参数的参数，就是查询参数
@app02.get("/jobs/{kd}")
async def get_jobs(kd : int, xl , gj : Union[str, None] = None):
    # kd : int, xl , gj : Optional[str] = None
    # 有默认参数，则查询参数可以不传
    
    # 基于三个参数数据库查询岗位信息
    return {
        "kd": kd, 
        "xl": xl, 
        "gj": gj
    }