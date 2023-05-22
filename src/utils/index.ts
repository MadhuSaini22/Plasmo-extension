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
    "https://api.eu1.500apps.com/technographics/domain/technologies/css?offset=0&limit=50",
  prospects: "https://jsonplaceholder.typicode.com/comments",
  emails: "https://jsonplaceholder.typicode.com/albums"
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
    fetch(`${config.domainEndpoint}`, {
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
  selectedKeyword
) => {
  setSubmitState((prev: any) => ({ ...prev, loading: true }))
  const currentData: any = await sendToBackground({
    name: selectedKeyword
  })

  if (currentData) {
    setKeywordData(currentData)
  } else {
    setKeywordData([])
    setSubmitState((prev: any) => ({ ...prev, error: true }))
  }

  setTimeout(() => {
    setSubmitState((prev: any) => ({ ...prev, loading: false }))
  }, 200)
}
