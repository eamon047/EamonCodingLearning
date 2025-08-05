import { Card, Typography } from '@mui/material';
import { TRAINING_CARD_SX_STYLE } from '../../consts';


/**
 * オンボーディングワーク001を行うコンポーネントです。
 * 
 * Tips: 
 *   Reactのコンポーネントは、一般的に１つのファイルが１つの部品を表します。
 *   このファイルでは、Training001というコンポーネントを作成しています。
 *   オンボーディングワーク001では、
 *     ・return () の中に記載した内容が画面の表示に反映されていること
 *     ・return () の上の部分で定数を定義でき、その定数を表示に利用できること
 *     ・Typographyコンポーネントを使って、文字を画面に表示できること
 *   を理解することを目的としています。この実装の雰囲気がなんとなくでも掴めていればOKです。
 */
export const Training001 = () => {

  // この定数を画面に表示してください。
  // 定数を表示したい場合は、{text}のように波括弧で囲むことで表示できます。
  const text001_2 = 'この文章を画面に表示してください。';

  // このreturn ()内の部分が画面に表示される箇所になります。
  return (
    <Card sx={TRAINING_CARD_SX_STYLE}>
      <Typography variant="h6">
        オンボーディングワーク001
      </Typography>
      <Typography>
        Hello world !!
      </Typography>
      <Typography>
        {text001_2}
      </Typography>

    </Card>
  )
}

/**
 * ヒント
 * 
 * このコンポーネントでは、Cardコンポーネントを使って「オンボーディング課題001」を実装するエリアをカードのように表示しています。
 * その中にテキストを表示するためにCardタグに囲われた中にTypographyコンポーネントで文字を表示しています。
 *     <Card>
 *         // Cardの中に表示したい内容を記載します。
 *     </Card>
 * 
 * 
 * このシステムでは、material-uiというライブラリのコンポーネントを利用して実装を行っています。
 * このファイルの先頭部分でimportしているように、必要なコンポーネントをimportして利用します。
 * どんなコンポーネントがあるかは、以下のサイトを参考にしてください。（オンボーディング課題中に把握する必要はありません。）
 * https://mui.com/components/
 * 
 * 
 * Typographyコンポーネントは文字を表示したいときに利用します。
 * 「オンボーディングワーク001」のタイトルのように文字を大きくしたい場合は、variantを変更することで調整ができます。
 * https://mui.com/material-ui/react-typography/#usage
 * 
 */
