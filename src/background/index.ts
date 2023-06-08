import { config } from "~config"
import { getData, parseJwt } from "~utils"
import { checkCookie } from "~utils"

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: config.homePage })
})

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type == 'get_token') {
    checkCookie().then((token: string) => {
      console.log({ token })
      getData(req.url, token).then(res => {
        console.log(res)
        sendResponse(res)
      })
    })
  }
})

