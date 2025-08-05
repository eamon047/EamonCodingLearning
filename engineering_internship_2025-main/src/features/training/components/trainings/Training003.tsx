import { Card, Typography } from '@mui/material';
import { TRAINING_CARD_SX_STYLE } from '../../consts';

interface Props {
  totalScore: number | undefined;
}

/**
 * オンボーディングワーク003を行うコンポーネントです。
 * 
 * Tips: 
 *   変数の状態によって表示内容を変えることができます。
 *   オンボーディングワーク003では、
 *     ・値や値がundefinedかどうかによって表示内容を変更する
 *   の実装の雰囲気を掴めればOKです。
 */
export const Training003 = ({ totalScore }: Props) => {

  return (
    <Card sx={TRAINING_CARD_SX_STYLE}>
      <Typography variant="h6">
        オンボーディングワーク003
      </Typography>

      { /* totalScoreがundefined(=値が入っていない状態)じゃない場合は合計点を表示する */}
      {totalScore !== undefined ? (
        <Typography>
          合計点: {totalScore} 点
        </Typography>
      ) : (
        <Typography>
          合計点が未定義です。
        </Typography>
      )}

      {/* TODO 5 : implement me !! */}
      {totalScore !== undefined && totalScore >= 100 && (
        <Typography>
          素晴らしい成績です！
        </Typography>
      )}

    </Card>
  )
}

/**
 * ヒント
 * TODO 5 の実装時に「'totalScore' is possibly 'undefined'.」というエラーが表示された場合、
 * その変数がundefinedの可能性があることを示しています。
 * その場合は、書きたい条件式の前に「totalScore !== undefined &&」を追加することでtotalScoreがundefinedであるケースを除外できます。
 * 
 */
