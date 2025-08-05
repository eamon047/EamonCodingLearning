import { Stack } from "@mui/material"
import { Training001 } from "./trainings/Training001"
import { Training002 } from "./trainings/Training002"
import { Training003 } from "./trainings/Training003"
import { Training004 } from "./trainings/Training004"
import { Training005 } from "./trainings/Training005"
import { Training006 } from "./trainings/Training006";
import { TrainingSample } from "./trainings/TrainingSample"

/**
 * オンボーディング課題一覧を表示するコンポーネントです。
 * それぞれの Training0XX のコンポーネントを開き、課題に取り組んでください。
 */
export const CatchUpTrainings = () => {
  return (
    <Stack gap={2} pb={10}>
      {/* オンボーディング課題一覧 */}
      <Training001 />
      <Training002 firstName="Taro" lastName="Yamada" testScore={{ japanese: 80, english: 60, math: 75 }} />
      <Training003 totalScore={200} />
      <Training004 handleButton2Click={handleButtonClick} messageForButton4Clicked="button4がクリックされたときのメッセージです" />
      <Training005 />
      <Training006 />
      <TrainingSample />
    </Stack>
  )
}

const handleButtonClick = () => {
  alert("button2 is clicked !!")
}
