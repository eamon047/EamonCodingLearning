import { SkillMst } from "../../features/skill/types";

/**
 * スキルマスタデータです。
 * このデータは、スキルの基本情報を持っています。
 *
 * @typedef {Object} SkillMst
 * @property {number} skillId - スキルID
 * @property {number} fkCategoryId - カテゴリID
 * @property {string} name - スキル名称
 * @property {string | undefined} description - スキルの説明
 */
export const skillMstData: SkillMst[] = [
    {
        skillId: 1,
        fkCategoryId: 1,
        name: "ヒアリング",
        description: "顧客や関係者からの要件を正確に理解するためのスキルです。",
    },
    {
        skillId: 2,
        fkCategoryId: 1,
        name: "合意形成",
        description:
            "プロジェクトの目標や要件について、関係者間で合意を得るためのスキルです。",
    },
    {
        skillId: 3,
        fkCategoryId: 1,
        name: "業務分析",
        description:
            "業務プロセスやシステムの現状を分析し、改善点を見つけるためのスキルです。",
    },
    {
        skillId: 4,
        fkCategoryId: 1,
        name: "批判的思考",
        description:
            "情報や意見を客観的に評価し、論理的な結論を導くためのスキルです。",
    },
    {
        skillId: 5,
        fkCategoryId: 1,
        name: "分析",
        description:
            "データや情報を詳細に調査し、パターンやトレンドを見つけるためのスキルです。",
    },
    {
        skillId: 6,
        fkCategoryId: 1,
        name: "ドキュメント整理",
        description:
            "プロジェクトの要件や仕様を文書化し、整理するためのスキルです。",
    },
    {
        skillId: 7,
        fkCategoryId: 2,
        name: "アーキテクチャ設計",
        description:
            "システム全体の構造を設計し、技術的な基盤を確立するためのスキルです。",
    },
    {
        skillId: 8,
        fkCategoryId: 2,
        name: "モデリング設計",
        description:
            "システムのデータやプロセスを視覚的に表現し、理解を深めるためのスキルです。",
    },
    {
        skillId: 9,
        fkCategoryId: 2,
        name: "UIUX設計",
        description:
            "ユーザーインターフェースとユーザーエクスペリエンスを設計し、使いやすいシステムを作るためのスキルです。",
    },
    {
        skillId: 10,
        fkCategoryId: 2,
        name: "データベース設計",
        description:
            "システムのデータを効率的に管理するためのデータベースの設計スキルです。",
    },
    {
        skillId: 11,
        fkCategoryId: 2,
        name: "インターフェース設計",
        description:
            "システム間のデータ交換や通信を設計し、相互運用性を確保するためのスキルです。",
    },
    {
        skillId: 12,
        fkCategoryId: 2,
        name: "セキュリティ設計",
        description:
            "システムのセキュリティを確保するための設計スキルで、脅威やリスクを評価し、対策を講じることが含まれます。",
    },
    {
        skillId: 13,
        fkCategoryId: 3,
        name: "プログラミング言語理解",
        description:
            "特定のプログラミング言語の構文や機能を理解し、効果的にコードを書くためのスキルです。",
    },
    {
        skillId: 14,
        fkCategoryId: 3,
        name: "データ構造とアルゴリズム",
        description:
            "効率的なデータ処理とアルゴリズムの設計に必要な基礎知識を持つスキルです。",
    },
    {
        skillId: 15,
        fkCategoryId: 3,
        name: "ソフトウェア設計パターン",
        description:
            "再利用可能なソフトウェア設計のためのパターンを理解し、適切に適用するスキルです。",
    },
    {
        skillId: 16,
        fkCategoryId: 3,
        name: "コードレビュー",
        description:
            "他の開発者のコードを評価し、改善点を指摘するためのスキルです。コードの品質向上に寄与します。",
    },
    {
        skillId: 17,
        fkCategoryId: 3,
        name: "パフォーマンス最適化",
        description:
            "システムのパフォーマンスを向上させるための技術や手法を理解し、適用するスキルです。",
    },
    {
        skillId: 18,
        fkCategoryId: 4,
        name: "テストケース設計",
        description:
            "ソフトウェアの機能や要件に基づいて、テストケースを設計するためのスキルです。正確なテストを行うために必要です。",
    },
    {
        skillId: 19,
        fkCategoryId: 4,
        name: "テスト自動化",
        description:
            "テストプロセスを効率化するために、テストの自動化ツールやスクリプトを使用するスキルです。手動テストの負担を軽減します。",
    },
    {
        skillId: 20,
        fkCategoryId: 4,
        name: "パフォーマンステスト",
        description:
            "システムのパフォーマンスを評価するためのテスト手法を理解し、実施するスキルです。システムの応答性やスケーラビリティを確認します。",
    },
    {
        skillId: 21,
        fkCategoryId: 4,
        name: "セキュリティテスト",
        description:
            "システムのセキュリティ脆弱性を評価するためのテスト手法を理解し、実施するスキルです。セキュリティリスクを特定し、対策を講じます。",
    },
    {
        skillId: 22,
        fkCategoryId: 4,
        name: "テスト結果解析",
        description:
            "テストの結果を分析し、問題点を特定するためのスキルです。テストの効果を評価し、改善策を提案します。",
    },
    {
        skillId: 23,
        fkCategoryId: 5,
        name: "システム監視",
        description:
            "システムの稼働状況を監視し、異常を検知するためのスキルです。システムの安定性と信頼性を確保します。",
    },
    {
        skillId: 24,
        fkCategoryId: 5,
        name: "パフォーマンスモニタリング",
        description:
            "システムのパフォーマンスをリアルタイムで監視し、最適化のためのデータを収集するスキルです。システムの効率性を向上させます。",
    },
    {
        skillId: 25,
        fkCategoryId: 5,
        name: "インシデント管理",
        description:
            "システムの障害や問題を迅速に対応し、解決するためのスキルです。サービスの継続性を確保します。",
    },
    {
        skillId: 26,
        fkCategoryId: 6,
        name: "コミュニケーション",
        description:
            "チーム内外での効果的な情報共有と意思疎通を行うためのスキルです。プロジェクトの成功に不可欠な要素です。",
    },
    {
        skillId: 27,
        fkCategoryId: 6,
        name: "説明力",
        description:
            "技術的な内容やプロジェクトの進捗を、関係者にわかりやすく説明するためのスキルです。理解を促進し、合意形成を助けます。",
    },
    {
        skillId: 28,
        fkCategoryId: 6,
        name: "ロジカルシンキング",
        description:
            "論理的な思考を用いて問題を分析し、解決策を導くためのスキルです。複雑な問題に対処する際に役立ちます。",
    },
    {
        skillId: 29,
        fkCategoryId: 6,
        name: "発想力",
        description:
            "新しいアイデアや解決策を生み出すための創造的な思考能力です。イノベーションを促進します。",
    },
    {
        skillId: 30,
        fkCategoryId: 6,
        name: "情報収集力",
        description:
            "必要な情報を効率的に収集し、分析するためのスキルです。プロジェクトの意思決定に役立ちます。",
    },
    {
        skillId: 31,
        fkCategoryId: 6,
        name: "ITリテラシー",
        description:
            "IT技術やツールを効果的に活用するための基本的な知識とスキルです。現代のビジネス環境で不可欠な能力です。",
    },
];
