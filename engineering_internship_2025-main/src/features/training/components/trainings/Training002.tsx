import { Card, Typography } from '@mui/material';
import { TRAINING_CARD_SX_STYLE } from '../../consts';


interface Props {
  firstName: string;
  lastName: string;
  testScore: {
    japanese: number;
    math: number;
    english: number;
  }
}

/**
 * オンボーディングワーク002を行うコンポーネントです。
 * 
 * Tips: 
 *   コンポーネントには、Props(↑)のように欲しいデータを指定することができます。
 *   コンポーネントの引数としてPropsを受け取ることで、そのデータをコンポーネント内で利用できます。
 *   CatchUpTrainings.tsxのように、Training002コンポーネントを利用するときにPropsで指定したデータを渡すことができます。
 *   オンボーディングワーク002では、
 *     ・Propsを使ってデータをコンポーネントに渡せること
 *     ・引数として受け取ったデータはコンポーネント内で処理できること
 *   を理解できればOKです。
 */
export const Training002 = ({
  firstName,
  lastName,
  testScore
}: Props) => {
  // TODO 3 : implement me !!
  const name = `${lastName} ${firstName} さん`;

  // TODO 4 : implement me !!
  const totalScore = testScore.japanese + testScore.math + testScore.english;


  return (
    <Card sx={TRAINING_CARD_SX_STYLE}>
      <Typography variant="h6">
        オンボーディングワーク002
      </Typography>
      {/* TODO 3 : implement me !! */}
      <Typography>
        {name}
      </Typography>

      {/* TODO 4 : implement me !! */}
      <Typography>
        {totalScore}
      </Typography>
    </Card>
  )
}

/**
 * ヒント
 * 
 * TODO 3 では、文字列を結合しても作成できますが、以下のように記載するとより簡潔に書けます。
 * const name = `${lastName} ${firstName} さん`
 * * これは、テンプレートリテラルと呼ばれる記法で、バッククォート（`）で囲むことで変数を埋め込むことができます。
 * * 例えば、`${変数}`のように記載することで、変数の値を文字列の中に埋め込むことができます。
 * * ダブルクォート（"）やシングルクォート（'）で囲むと文字列として扱われてしまい、変数の値は埋め込まれません。
 * 
 * 
 * TODO 4 では、テストの合計点を計算するために、testScoreオブジェクトの各科目の点数を足し合わせてください。
 * 各教科のscoreは、testScore.japanese, testScore.math, testScore.englishのような記法で取得できます。
 * 
 */
