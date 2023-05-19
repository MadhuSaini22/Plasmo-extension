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
  first: "https://jsonplaceholder.typicode.com/posts",
  second: "https://jsonplaceholder.typicode.com/comments",
  third: "https://jsonplaceholder.typicode.com/albums"
}

// Call the API for the dropdown data
export const fetchKeywordData = async (keyword: any) => {
  return new Promise((resolve, reject) => {
    fetch(`${urls[keyword]}`)
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
