# 选课系统

from tortoise.models import Model
from tortoise import fields


class Student(Model):
    id = fields.IntField(pk=True) # pk: primary key, 将id设为主键
    name = fields.CharField(max_length = 32, description="学生姓名")
    pwd = fields.CharField(max_length=32, description="密码")
    student_id = fields.IntField(description="学号")

    # 描述一对多的关系
    clas = fields.ForeignKeyField("models.Clas", related_name="students")
    # 描述多对多的关系
    courses = fields.ManyToManyField("models.Course", related_name="students")

class Teacher(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length = 32, description="教师姓名")
    pwd = fields.CharField(max_length=32, description="密码")
    teacher_id = fields.IntField(description="教职工号")

class Clas(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length = 32, description="班级名称")

class Course(Model):
    id = fields.IntField(pk=True)
    name = fields.CharField(max_length=32, description="课程名称")
    teacher = fields.ForeignKeyField("models.Teacher", related_name="courses")
    addr = fields.CharField(max_length=32, description="教师")
