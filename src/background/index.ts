import { config } from "~config"
import { getData } from "~utils"
import { checkCookie } from "~utils"

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: config.homePage })
})

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.type == 'get_token') {
    checkCookie().then((cookie: string) => {
      getData(req.url, cookie).then(res => {
        sendResponse({data:res, cookie})
      })
    })
  }
})

