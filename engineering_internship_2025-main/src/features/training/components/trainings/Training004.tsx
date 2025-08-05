import { Button, Card, Stack, Typography } from "@mui/material";
import { TRAINING_CARD_SX_STYLE } from "../../consts";

interface Props {
  handleButton2Click: () => void;
  messageForButton4Clicked: string;
}
/**
 * オンボーディングワーク004を行うコンポーネントです。
 * 
 * Tips: 
 *   オンボーディングワーク004では、
 *     ・Buttonコンポーネントの作り方
 *     ・クリック時の関数の呼び出し方
 *   の実装の雰囲気を掴めればOKです。
 */
export const Training004 = ({ handleButton2Click, messageForButton4Clicked }: Props) => {

  // Button3をクリックしたときに実行
  const handleButton3Click = () => {
    alert("button3 is clicked !!")
  };


  return (
    <Card sx={TRAINING_CARD_SX_STYLE}>
      <Typography variant="h6">
        オンボーディングワーク004
      </Typography>

      {/* Tips: 
      *   Stackは中の要素を並べるためのレイアウト用のコンポーネントです。
      *   要素間のスペースの調整や余白の調整を行うことができます。ここではボタンを横並びに配置しています。
      *   spacing={2}で要素間のスペースを空けています。
      *   direction="row"で複数のButtonを横並びに表示しています。
      */}
      <Stack spacing={2} direction="row" alignItems="center">
        <Button variant="contained" onClick={() => {
          console.log("このボタンがクリックされると、ブラウザの開発者ツールのコンソールにこのメッセージが表示されます。");
        }}>
          ボタン1
        </Button>

        <Button variant="outlined" onClick={() => handleButton2Click()}>
          ボタン2
        </Button>

        {/* TODO 6 : implement me !! */}
        <Button variant="text" onClick={() => handleButton3Click()}>
          ボタン3
        </Button>

        {/* TODO 7 : implement me !! */}
        <Button variant="contained" onClick={() => {
          console.log(messageForButton4Clicked);
        }}>
          ボタン4
        </Button>
      </Stack>
    </Card>
  );
}

/**
 * ヒント
 * 
 * Buttonコンポーネントは、ボタンを作成するためのコンポーネントです。
 * variantプロパティを使うことで、ボタンのスタイルを変更できます。
 *   - variant="contained" : 塗りつぶしのあるボタン
 *   - variant="outlined" : 枠線のあるボタン
 *   - variant="text" : テキストのみのボタン
 * 他にもButtonコンポーネントでできることを知りたい場合は、以下を参考にしてください。
 * https://mui.com/material-ui/react-button/
 * 
 */
