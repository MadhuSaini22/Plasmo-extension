import "~base.css"
import "~style.css"

import { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import BodySection from "~components/BodySection"
import Footer from "~components/Footer"
import Header from "~components/Header"
import MenuBar from "~components/MenuBar"
import SearchBar from "~components/SearchBar"
import IsLoggedIn from "~components/loaders/IsLoggedIn"
import { config } from "~config"
import { translation } from "~translate"
import { checkCookie, fetchData, getDomainInfo, getUserInfo } from "~utils"

const types = ["technologies", "prospects", "emails"]

function IndexPopup() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [selectedKeyword, setSelectedKeyword] = useState<any>("prospects")
  const [keywordData, setKeywordData] = useState<any>()
  const [domainData, setDomainData] = useState()
  const [userData, setUserData] = useState({})
  const [submitState, setSubmitState] = useState<any>({
    loading: false,
    error: undefined
  })

  useEffect(() => {
    const fetchData = async () => {
      const cookie = await checkCookie()
      if (cookie == true) setIsLoggedIn(true)
      else setIsLoggedIn(false)
      const domainInfo: any = await getDomainInfo()
      if (domainInfo && domainInfo.length > 0) setDomainData(domainInfo[0])
      else setDomainData(null)
      const userInfo = await getUserInfo()
      if (userInfo) setUserData(userInfo)
      else setUserData({})
    }
    fetchData()
  }, [])

  useEffect(() => {
    selectedKeyword &&
      fetchData(
        setSubmitState,
        setKeywordData,
        sendToBackground,
        selectedKeyword
      )
  }, [selectedKeyword])

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
            />

            <BodySection
              selectedKeyword={selectedKeyword}
              keywordData={keywordData}
              submitState={submitState}
            />
          </div>
          <Footer userData={userData} />
        </>
      )}
    </div>
  )
}

export default IndexPopup
