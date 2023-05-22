import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchKeywordData } from "~utils"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  const result = await fetchKeywordData("emails")
  res.send(result)
}

export default handler
