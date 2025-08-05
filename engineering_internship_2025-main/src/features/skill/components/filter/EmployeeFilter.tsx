import {
    Box,
    Card,
    CardContent,
    FormControl,
    FormGroup,
    FormLabel,
    MenuItem,
    Select,
    Stack,
    TextField
} from "@mui/material";
import { useCallback, useState } from "react";
import { useSkillLevelList } from "../../api/useSkillLevelList";
import { useSkillList } from "../../api/useSkillList";

interface Props {
    searchWord: string;
    setSearchWord: (searchWord: string) => void;
    skillId: string;
    setSkillId: (skillId: string) => void;
    skillLevelId: string;
    setSkillLevelId: (skillLevelId: string) => void;
}
export const EmployeeFilter = ({
    searchWord,
    setSearchWord,
    skillId,
    setSkillId,
    skillLevelId,
    setSkillLevelId,
}: Props) => {
    // 入力用
    const [inputSearchWord, setInputSearchWord] = useState<string>(searchWord);

    // フィルターの選択肢を取得
    const { skills, skillsError } = useSkillList();
    const { skillLevels, skillLevelsError } = useSkillLevelList();

    // 入力されたinputSearchWordをsearchWordに反映する
    const reflectInputSearchWord = useCallback(() => {
        setSearchWord(inputSearchWord);
    }, [inputSearchWord, setSearchWord]);

    // TODO : エラー時の表示作成
    if (skillsError || skillLevelsError) return <div>{"data fetch error"}</div>;
    if (!skills || !skillLevels) return <div>Loading...</div>;

    return (
        <Box>
            <Card
                elevation={0}
                sx={{
                    height: "80%",
                    border: "1px solid #e0e0e0", // アウトラインとしてのボーダーを追加
                    //borderRadius: '4px',       // 角丸を追加（必要に応じて調整）
                }}
            >
                <CardContent>
                    <Stack gap={2}>
                        {/* 絞り込み検索ワード */}
                        <FormControl>
                            <FormLabel>絞り込み</FormLabel>
                            <FormGroup>
                                <TextField
                                    size="small"
                                    value={inputSearchWord}
                                    onChange={(e) => {
                                        setInputSearchWord(e.target.value);
                                    }}
                                    onBlur={reflectInputSearchWord}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            reflectInputSearchWord();
                                        }
                                    }}
                                    placeholder={"社員番号・社員名称・所属"}
                                />
                            </FormGroup>
                        </FormControl>
                        {/* スキル */}
                        <FormControl>
                            <FormLabel>スキル</FormLabel>
                            <FormGroup>
                                <Select
                                    size="small"
                                    value={skillId}
                                    onChange={(e) => {
                                        setSkillId(e.target.value);
                                    }}
                                    label="スキル"
                                >
                                    <MenuItem value=""></MenuItem>
                                    {skills.map((skill) => (
                                        <MenuItem value={skill.skillId}>
                                            {skill.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormGroup>
                        </FormControl>
                        {/* レベル */}
                        <FormControl>
                            <FormLabel>レベル</FormLabel>
                            <FormGroup>
                                <Select
                                    size="small"
                                    value={skillLevelId}
                                    onChange={(e) => {
                                        setSkillLevelId(e.target.value);
                                    }}
                                    label="レベル"
                                >
                                    <MenuItem value=""></MenuItem>
                                    {skillLevels.map((skillLevel) => (
                                        <MenuItem value={skillLevel.skillLevelId}>
                                            {skillLevel.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormGroup>
                        </FormControl>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};
