from tortoise import BaseDBAsyncClient


async def upgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE `course` ADD `addr` VARCHAR(32) NOT NULL COMMENT '教师';
        ALTER TABLE `student` RENAME COLUMN `students_id` TO `student_id`;
        ALTER TABLE `teacher` RENAME COLUMN `teachers_id` TO `teacher_id`;"""


async def downgrade(db: BaseDBAsyncClient) -> str:
    return """
        ALTER TABLE `course` DROP COLUMN `addr`;
        ALTER TABLE `student` RENAME COLUMN `student_id` TO `students_id`;
        ALTER TABLE `teacher` RENAME COLUMN `teacher_id` TO `teachers_id`;"""
