import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchKeywordData } from "~utils"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const result = await fetchKeywordData("technologies")
  console.log({ result }, "in bg")
  res.send(result)
}

export default handler
