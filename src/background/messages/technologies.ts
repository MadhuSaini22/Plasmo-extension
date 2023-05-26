import type { PlasmoMessaging } from "@plasmohq/messaging"

import { fetchKeywordData } from "~utils"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  //@ts-ignore

  const result = await fetchKeywordData(req.name, req.token, req.domain)

  res.send(result)
}

export default handler
