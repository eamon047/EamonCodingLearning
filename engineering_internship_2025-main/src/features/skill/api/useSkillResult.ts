import { deleteApi, postApi } from ".";

export const saveSkillResult = async (skillResult: {
    empId: number;
    skillId: number;
    skillEvaId: number;
}): Promise<void> => {
    await postApi(`skill-management/skill-result/create`, skillResult);
};

export const updateSkillResult = async (skillResult: {
    empId: number;
    skillId: number;
    skillEvaId: number;
}): Promise<void> => {
    await postApi(`skill-management/skill-result/update`, skillResult);
};

export const deleteSkillResult = async (skillResultId: number) => {
    await deleteApi(`skill-management/skill-result/delete/${skillResultId}`);
};
