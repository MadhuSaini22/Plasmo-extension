import "~base.css"
import "~style.css"

import { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import Footer from "~components/Footer"
import Header from "~components/Header"
import MenuBar from "~components/MenuBar"
import SearchBar from "~components/SearchBar"
import BodyHeader from "~components/bodySection/Emails/BodyHeader"
import ProsBody from "~components/bodySection/Prospects/ProsBody"
import ProsHeader from "~components/bodySection/Prospects/ProsHeader"
import SkeletonLoader from "~components/loaders/SkeletonLoader"
import { config } from "~config"
import { translation } from "~translate"
import { checkCookie, fetchData, fetchKeywordData } from "~utils"

function IndexPopup() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [selectedKeyword, setSelectedKeyword] = useState<any>("first")
  const [keywordData, setKeywordData] = useState<any>()
  const [submitState, setSubmitState] = useState<any>({
    loading: false,
    error: undefined
  })
  const types = ["first", "second", "third"]

  useEffect(() => {
    const fetchData = async () => {
      const cookie = await checkCookie()
      if (cookie == true) setIsLoggedIn(true)
      else setIsLoggedIn(false)
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
    <div className="w-[500px] flex-col overflow-y-auto  flex items-center justify-center px-3 py-1">
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
      <Header />

      <div className="flex w-full h-full flex-col">
        <MenuBar types={types} setSelectedKeyword={setSelectedKeyword} />
        {/* <BodyHeader /> */}
        {/* <ProsHeader /> */}
        <ProsBody />
        <Footer />

        {/* {submitState.loading ? (
          <div className="flex items-center">
            <SkeletonLoader
              boxLoaderHeight="40px"
              boxLoaderWidth="500px"
              gridCount={5}
            />
          </div>
        ) : (
          <>
            {keywordData && keywordData.length > 0 ? (
              <div>
                {keywordData.map((elem, index) => (
                  <div key={index}>{elem.title ? elem.title : elem.name}</div>
                ))}
              </div>
            ) : (
              <div>No data found</div>
            )}
          </>
        )} */}
      </div>
    </div>
  )
}

export default IndexPopup
