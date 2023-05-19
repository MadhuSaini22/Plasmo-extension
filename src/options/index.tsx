import React from "react"

import { sendToBackground } from "@plasmohq/messaging"

export default function IndexOptions() {
  const handleNotify = async () => {
    const resp = await sendToBackground({
      name: "ping",
      body: {
        id: 123
      }
    })
  }
  handleNotify()
  console.log("Options")
  return <div>Options</div>
}
