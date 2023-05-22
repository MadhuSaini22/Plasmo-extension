import "~base.css"
import "~style.css"

import { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import BodySection from "~components/BodySection"
import Footer from "~components/Footer"
import Header from "~components/Header"
import MenuBar from "~components/MenuBar"
import SearchBar from "~components/SearchBar"
import { config } from "~config"
import { translation } from "~translate"
import { checkCookie, fetchData, getDomainInfo, getUserInfo } from "~utils"

const types = ["technologies", "prospects", "emails"]

function IndexPopup() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [selectedKeyword, setSelectedKeyword] = useState<any>("prospects")
  const [keywordData, setKeywordData] = useState<any>()
  const [domainData, setDomainData] = useState({})
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
      const domainInfo = await getDomainInfo()
      if (domainInfo) setDomainData(domainInfo)
      else setDomainData({})
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
        <div
          id="second"
          className="p-5 z-[999] flex flex-col items-center justify-center mb-5">
          <span className=" my-3 text-lg text-center font-bold">
            {translation.LoginText}
          </span>
          <button
            onClick={() => chrome.tabs.create({ url: `${config.homePage}` })}
            className={`py-3 flex items-center justify-center space-x-3 px-8 rounded-lg w-[120px] h-[50px] text-white font-bold text-base bg-violet-400 hover:bg-violet-500 `}>
            <span>{translation.Login}</span>
          </button>
        </div>
      ) : (
        <></>
      )}
      <SearchBar />
      <Header domainData={domainData} />
      <div className="flex w-full h-full flex-col">
        <MenuBar
          types={types}
          setSelectedKeyword={setSelectedKeyword}
          selectedKeyword={selectedKeyword}
        />

        <BodySection selectedKeyword={selectedKeyword} />
        <Footer userData={userData} />
      </div>
    </div>
  )
}

export default IndexPopup
