import { config } from "~config"

// Check if cookie named "token" exists on home website
export const checkCookie = () => {
  return new Promise((resolve, reject) => {
    chrome.cookies.get(
      { url: `${config.homePage}`, name: `${config.cookieName}` },
      function (cookie) {
        if (cookie) {
          resolve(true)
        } else {
          resolve(false)
        }
      }
    )
  })
}

const urls = {
  technologies:
    "https://api.eu1.500apps.com/technographics/domain/salesforce.com?offset=0&limit=50",
  prospects:
    "https://api.eu1.500apps.com/elastic/search?offset=0&limit=50&where=company_name%20like%20%27%25salesforce.com%25%27",
  emails:
    "https://api.eu1.500apps.com/elastic/search?offset=0&limit=50&where=company_name%20like%20%27%25salesforce.com%25%27  "
}

// Call the API for the keyword data
export const fetchKeywordData = async (keyword: any) => {
  return new Promise((resolve, reject) => {
    fetch(`${urls[keyword]}`, {
      method: "GET",
      headers: {
        Authorization: `${config.cookie}`
      }
    })
      .then((res) => res.json())
      .then((data: any) => {
        resolve(data)
      })
      .catch((error) => {
        console.error("Error:", error)
        resolve(false)
      })
  })
}

// Call the API for the domain data
export const getDomainInfo = async () => {
  return new Promise((resolve, reject) => {
    getCurrentTabDomainName()
      .then((domainName) => {
        fetch(
          `https://api.eu1.500apps.com/elastic/search?offset=0&limit=50&where=company_name%20like%20%27%25${domainName}%25%27`,
          {
            method: "GET",
            headers: {
              Authorization: `${config.cookie}`
            }
          }
        )
          .then((res) => res.json())
          .then((data: any) => {
            resolve(data)
          })
          .catch((error) => {
            console.error("Error:", error)
            resolve(false)
          })
      })
      .catch((error) => {
        console.error("Error occurred while retrieving current tab:", error)
      })
  })
}

// Call the API for the domain data
export const addToContact = async (body) => {
  return new Promise((resolve, reject) => {
    fetch(`${config.addToContact}`, {
      method: "POST",

      headers: {
        Authorization: `${config.cookie}`,
        "Content-type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((data: any) => {
        resolve(data)
      })
      .catch((error) => {
        console.error("Error:", error)
        resolve(false)
      })
  })
}

// Call the API for the domain data
export const getUserInfo = async () => {
  return new Promise((resolve, reject) => {
    fetch(`${config.userEndpoint}`, {
      method: "GET",
      headers: {
        Authorization: `${config.cookie}`
      }
    })
      .then((res) => res.json())
      .then((data: any) => {
        resolve(data)
      })
      .catch((error) => {
        console.error("Error:", error)
        resolve(false)
      })
  })
}

export const fetchData = async (
  setSubmitState,
  setKeywordData,
  sendToBackground,
  selectedKeyword,
  flag
) => {
  setSubmitState((prev: any) => ({ ...prev, loading: true }))
  const currentData: any = await sendToBackground({
    name: selectedKeyword
  })

  if (currentData) {
    flag
      ? setKeywordData((prev) => ({
          ...prev,
          [selectedKeyword]: currentData.length
        }))
      : setKeywordData(currentData)
    setSubmitState((prev: any) => ({ ...prev, loading: false }))
  } else {
    setKeywordData([])
    setSubmitState((prev: any) => ({ ...prev, error: true, loading: false }))
  }
}

export const getStats = async (sendToBackground, selectedKeyword) => {
  try {
    const currentData: any = await sendToBackground({
      name: selectedKeyword
    })
    return currentData
  } catch (error) {
    console.error("An error occurred:", error)
    return false
  }
}

export function getCurrentTabDomainName() {
  return new Promise((resolve, reject) => {
    chrome.tabs
      .query({ active: true, currentWindow: true })
      .then((tabs) => {
        if (tabs && tabs.length > 0) {
          const tab = tabs[0]
          const url = new URL(tab.url)
          const domainName = url.hostname.startsWith("www.")
            ? url.hostname.substring(4)
            : url.hostname
          resolve(domainName)
        } else {
          reject(new Error("Unable to retrieve current tab."))
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}
