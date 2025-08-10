from fastapi import APIRouter, Request
from fastapi.exceptions import HTTPException
from pydantic import BaseModel, field_validator
from models import *
from fastapi.templating import Jinja2Templates
from typing import List, Union

student_api = APIRouter()

templates = Jinja2Templates(directory="templates")

@student_api.get("/")
async def getAllStudent():
    # (1)查询所有 all 方法
    students = await Student.all()    # 得到一个Queryset: [Student(), Student(), Student()]
    # students[0].name
    print("students", students)

    for stu in students:
        print(stu.name, stu.student_id)

    return students

    # (2)过滤查询 filter
    # students = await Student.filter(name="Eamon")   # 得到的还是一个Queryset, 因为可能重名 [Student()]

    # for stu in students:
    #     print(stu.name, stu.students_id)

    # (3)过滤查询 get (返回模型类对象而非数组)
    # students = await Student.get(id=6)   # 得到 Student()
    # # students = await Student.get(clas_id=14)   # 确定只有一个结果时使用，返回多个结果时会报错
    # print(students.name)

    # (4)模糊查询
    # students = await Student.filter(clas_id__gte=14) # 大于: __gt, 小于: __lt
    # students = await Student.filter(student_id__range=[1, 10000])
    # students = await Student.filter(student_id__in=[2001, 2002])

    # for stu in students:
    #     print(stu.name, stu.students_id)

    # (5)values查询
    # students = await Student.all().values("name") # [Student(), ...] 信息太多，只希望得到有用的信息存储为字典
    #                                               # [{}, {}, {}, ...]
    # students = await Student.all().values("name", "student_id") # [{ , }, {, }, {, }, ...]
    
    # print(students) 

    # (6)一对多查询，多对多查询
    # eamon = await Student.get(name='Eamon')    

    # print(await eamon.clas.values("name"))
    # print(await eamon.courses.all().values("name", "teacher__name"))

    # students = await Student.all().values("name", "clas__name", "courses__name")
    # return students

    ##############
    #    对比     #
    ##############    
    # return {
    #     "查看所有学生": students
    # }
    # students = await Student.filter(student_id__range=[1, 10000])
    # students = await Student.all().values("name", "student_id")
    # 前者是将对象(包含了所有的字段信息)进行了json序列化，后者是将字典进行了json序列化


    return {
        "操作": "查看所有的学生"
    }

@student_api.get("/index.html")
async def getAllStudent(request: Request):
    students = await Student.all()

    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "students": students
        }
    )

class StudentIn(BaseModel):
    name: str
    pwd: str
    student_id: int
    clas_id: int
    courses: List[int] = []

    @field_validator("name")
    @classmethod
    def name_must_alpha(cls, value):
        assert value.isalpha(), 'name must be alpha'
        return value

    @field_validator("student_id")
    @classmethod
    def student_id_validate(cls, value):
        assert value > 2000 and value < 10000, '学号应该在2000-10000的范围内'
        return value
   

@student_api.post("/")
async def addStudent(student_in: StudentIn):
    # 插入到数据库中

    # 方式1
    # student = Student(name=student_in.name,
    #                   pwd=student_in.pwd,
    #                   student_id=student_in.student_id,
    #                   clas_id=student_in.clas_id)

    # await student.save()  # 插入到数据库

    # 方式2
    student = await Student.create(name=student_in.name,
                                   pwd=student_in.pwd,
                                   student_id=student_in.student_id,
                                   clas_id=student_in.clas_id)

    # 多对多的关系绑定
    chosen_sourses = await Course.filter(id__in=student_in.courses)
    await student.courses.add(*chosen_sourses)
    # 不使用星号: add(courses)  # 传入一个列表参数
    # 使用星号  : add(*courses)  # 相当于 add(course1, course2, course3)

    return student

@student_api.get("/{student_id}")
async def getOneStudent(student_id: int):
    student = await Student.get(id=student_id)
    return student

@student_api.put("/{student_id}")
async def updateStudent(student_id: int, student_in: StudentIn):

    data = student_in.model_dump()
    courses = data.pop("courses")

    await Student.filter(id=student_id).update(**data)
    # 不使用 ** : some_function(params)  # 传入一个字典参数
    # 使用 **   : some_function(**params)  # 相当于 some_function(name="张三", age=25)

    # 设置多对多部分(学生与课程)
    edit_student = await Student.get(id=student_id)
    chosen_courses = await Course.filter(id__in=courses)
    await edit_student.courses.clear()
    await edit_student.courses.add(*chosen_courses)

    return edit_student

@student_api.delete("/{student_id}")
async def deleteStudent(student_id: int):

    deleteCount = await Student.filter(id=student_id).delete()

    if not deleteCount:
        raise HTTPException(status_code=404, detail=f"主键为{student_id}的学生不存在")

    return {}