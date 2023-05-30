import { config } from "~config"

chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: config.homePage })
})

export {}
