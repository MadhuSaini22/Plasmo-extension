import { checkCookie, getData, parseJwt } from "~utils"

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: config.homePage })
})

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type === "get_token") {
    checkCookie().then((res: string) => {
      sendResponse(res)
      getData(res).then((res: any) => {
        console.log(res)
      })
    })
  }
})

export {}
