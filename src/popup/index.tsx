import "~style.css"

import { useEffect, useLayoutEffect, useState } from "react"

import BodySection from "~components/BodySection"
import Footer from "~components/Footer"
import Header from "~components/Header"
import MenuBar from "~components/MenuBar"
import SearchBar from "~components/SearchBar"
import IsLoggedIn from "~components/loaders/IsLoggedIn"
import { checkCookie, fetchData, fetchKeywordData, getDomainInfo, getStats, parseJwt } from "~utils"

const types = ["technologies", "prospects", "emails"]

function IndexPopup() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [selectedKeyword, setSelectedKeyword] = useState<any>("prospects")
  const [keywordData, setKeywordData] = useState<any>({
    technologies: null,
    emails: null,
    prospects: null
  })
  const [domainData, setDomainData] = useState<any>()
  const [token, setToken] = useState<any>()
  const [userData, setUserData] = useState()
  const [domain, setDomain] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      const cookie = await checkCookie()
      if (cookie) {
        setToken(cookie)
        setUserData(parseJwt(cookie))
        setIsLoggedIn(true)
      } else setIsLoggedIn(false)
      if (token && domain) {
        const domainInfo: any = await getDomainInfo(token, domain)
        if (domainInfo && domainInfo.length > 0) setDomainData(domainInfo[0])
        else setDomainData({})
      }
    }
    fetchData()
  }, [token])
  useEffect(() => {
    if (domain && token) {
      fetchKeywordData("emails_count", token, domain).then((data) => {
        setKeywordData((prev) => ({
          ...prev,
          emails: data?.[0]?.count || 0
        }))
      })
      fetchKeywordData("prospect_count", token, domain).then((data) => {
        setKeywordData((prev) => ({
          ...prev,
          prospects: data?.[0]?.count || 0
        }))
      })
      fetchKeywordData("tech_count", token, domain).then((data) => {
        setKeywordData((prev) => ({
          ...prev,
          technologies: data?.[0]?.count || 0
        }))
      })
    }

    return () => {}
  }, [token, domain])

  useLayoutEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      if (tabs && tabs.length > 0) {
        const tab = tabs[0]
        const url = new URL(tab.url)
        const domainName = url.hostname.startsWith("www.") ? url.hostname.substring(4) : url.hostname
        setDomain(domainName)
      } else {
        setDomain(null)
      }
    })

    return () => {}
  }, [])

  return (
    <div className="w-[500px] flex-col overflow-y-auto rounded-xl flex items-center justify-center px-3 py-1">
      {!isLoggedIn ? (
        <IsLoggedIn />
      ) : (
        <>
          <SearchBar />
          <Header domainData={domainData} />
          <div className="flex w-full h-full flex-col">
            <MenuBar
              types={types}
              setSelectedKeyword={setSelectedKeyword}
              selectedKeyword={selectedKeyword}
              keywordData={keywordData}
            />

            <BodySection
              selectedKeyword={selectedKeyword}
              domain={domain}
              token={token}
              keywordData={keywordData}
              // email_count={email_count}
            />
          </div>
          <Footer userData={userData} />
        </>
      )}
    </div>
  )
}

export default IndexPopup
