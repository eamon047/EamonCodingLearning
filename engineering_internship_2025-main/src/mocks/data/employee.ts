import { Employee } from "../../features/skill/types";

/**
 * 社員データです。
 * このデータは、社員の基本情報を持っています。
 *
 * @typedef {Object} Employee
 * @property {number} empId - 社員ID
 * @property {string} empName - 社員名称
 * @property {string} hireDate - 入社日
 * @property {string} birthDate - 誕生日
 * @property {string} department - 所属（選択肢 : 開発, 営業）
 * @property {string} office - 事業所（選択肢 : 東京, 大阪）
 * @property {string} rank - 職位（選択肢 : Grade 1, Grade 2, Grade 3, Grade 4）
 */
export const employeeData: Employee[] = [
    {
        empId: 1,
        empName: "山田　太郎",
        hireDate: "2011-04-01",
        birthDate: "1987-01-02",
        department: "開発",
        office: "東京",
        rank: "Grade 4",
    },
    {
        empId: 2,
        empName: "佐藤　花子",
        hireDate: "2024-04-01",
        birthDate: "1995-05-05",
        department: "開発",
        office: "東京",
        rank: "Grade 3",
    },
    {
        empId: 3,
        empName: "鈴木　一郎",
        hireDate: "2024-04-01",
        birthDate: "1995-05-05",
        department: "営業",
        office: "東京",
        rank: "Grade 4",
    },
    {
        empId: 4,
        empName: "高橋　美咲",
        hireDate: "2017-04-01",
        birthDate: "1990-12-06",
        department: "営業",
        office: "大阪",
        rank: "Grade 3",
    },
    {
        empId: 5,
        empName: "田村　良助",
        hireDate: "2004-04-01",
        birthDate: "1987-11-16",
        department: "営業",
        office: "東京",
        rank: "Grade 1",
    },
    {
        empId: 6,
        empName: "川口　由美子",
        hireDate: "2007-04-01",
        birthDate: "1991-08-05",
        department: "営業",
        office: "東京",
        rank: "Grade 1",
    },
    {
        empId: 7,
        empName: "松本　真一",
        hireDate: "2012-04-01",
        birthDate: "1994-07-13",
        department: "開発",
        office: "大阪",
        rank: "Grade 3",
    },
    {
        empId: 8,
        empName: "鈴森　美幸",
        hireDate: "2025-04-01",
        birthDate: "1999-08-22",
        department: "開発",
        office: "東京",
        rank: "Grade 4",
    },
    {
        empId: 9,
        empName: "伊東　たくみ",
        hireDate: "2004-04-01",
        birthDate: "1987-11-16",
        department: "営業",
        office: "東京",
        rank: "Grade 1",
    },
    {
        empId: 10,
        empName: "中野　さくら",
        hireDate: "2004-04-01",
        birthDate: "1987-11-16",
        department: "営業",
        office: "東京",
        rank: "Grade 2",
    },
    {
        empId: 11,
        empName: "藤井　直樹",
        hireDate: "2004-04-01",
        birthDate: "1987-11-16",
        department: "営業",
        office: "東京",
        rank: "Grade 2",
    },
    {
        empId: 12,
        empName: "渡辺　恵",
        hireDate: "2004-04-01",
        birthDate: "1987-11-16",
        department: "営業",
        office: "東京",
        rank: "Grade 1",
    },
    {
        empId: 13,
        empName: "石井　大輔",
        hireDate: "2004-04-01",
        birthDate: "1987-11-16",
        department: "営業",
        office: "東京",
        rank: "Grade 3",
    },
    {
        empId: 14,
        empName: "小林　麻友",
        hireDate: "2004-04-01",
        birthDate: "1987-11-16",
        department: "営業",
        office: "東京",
        rank: "Grade 3",
    },
    {
        empId: 15,
        empName: "石田　英次",
        hireDate: "2004-04-01",
        birthDate: "1987-11-16",
        department: "営業",
        office: "東京",
        rank: "Grade 1",
    },
    {
        empId: 16,
        empName: "山本　美咲",
        hireDate: "2004-04-01",
        birthDate: "1987-11-16",
        department: "営業",
        office: "東京",
        rank: "Grade 2",
    },
    {
        empId: 17,
        empName: "佐々木　健太",
        hireDate: "2004-04-01",
        birthDate: "1987-11-16",
        department: "営業",
        office: "東京",
        rank: "Grade 1",
    },
    {
        empId: 18,
        empName: "中村　優子",
        hireDate: "2004-04-01",
        birthDate: "1987-11-16",
        department: "営業",
        office: "東京",
        rank: "Grade 3",
    },
];
