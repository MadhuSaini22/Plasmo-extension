import { config } from "~config"

// Check if cookie named "token" exists on home website
export const checkCookie = () => {
  return new Promise((resolve, reject) => {
    chrome.cookies.get(
      { url: `${config.homePage}`, name: `${config.cookieName}` },
      function (cookie) {
        if (cookie) {
          const my_string = decodeURIComponent(cookie.value)

          resolve(JSON.parse(my_string).jwt)
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
    "https://finderio.500apps.com/finderdb/v1/domain/salesforce.com?limit=50"
}

// Call the API for the keyword data
export const fetchKeywordData = async (
  keyword: any,
  token: any,
  domain: any
) => {
  return new Promise((resolve, reject) => {
    const url = replaceString(urls[keyword], domain)
    url &&
      token &&
      fetch(`${url}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
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

export function replaceString(string1, string2) {
  var regex = /salesforce\.com/g
  var replacedString = string1.replace(regex, string2)
  return replacedString
}

// Call the API for the domain data
export const getDomainInfo = async (token, domain) => {
  return new Promise((resolve, reject) => {
    fetch(
      `https://api.eu1.500apps.com/elastic/search?offset=0&limit=50&where=company_name%20like%20%27%25${domain}%25%27`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
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
  }).catch((error) => {
    console.error("Error occurred while retrieving current tab:", error)
  })
}

// Call the API for the domain data
export const addToContact = async (body, token) => {
  return new Promise((resolve, reject) => {
    fetch(`${config.addToContact}`, {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
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

// // Call the API for the domain data
// export const getUserInfo = async () => {
//   return new Promise((resolve, reject) => {
//     fetch(`${config.userEndpoint}`, {
//       method: "GET",
//       headers: {
//         Authorization: `${config.cookie}`
//       }
//     })
//       .then((res) => res.json())
//       .then((data: any) => {
//         resolve(data)
//       })
//       .catch((error) => {
//         console.error("Error:", error)
//         resolve(false)
//       })
//   })
// }

export const fetchData = async (
  setSubmitState,
  setKeywordData,
  sendToBackground,
  selectedKeyword,
  flag,
  domain,
  token
) => {
  setSubmitState((prev: any) => ({ ...prev, loading: true }))

  const currentData = await sendToBackground({
    name: selectedKeyword,
    token: token,
    domain: domain
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

export const getStats = async (
  sendToBackground,
  selectedKeyword,
  token,
  domain
) => {
  try {
    const currentData: any = await sendToBackground({
      name: selectedKeyword,
      token: token,
      domain: domain
    })
    return currentData
  } catch (error) {
    console.error("An error occurred:", error)
    return false
  }
}

export function parseJwt(token) {
  var base64Url = token.split(".")[1]
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join("")
  )

  return JSON.parse(jsonPayload)
}

export function countURLs(urlString) {
  // Remove any leading/trailing whitespaces and split the string by commas
  const urls = urlString.trim().split(",")

  // Return the count of URLs
  return urls.length
}
