import "~base.css"
import "~style.css"

import { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

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
    <div className="w-[550px] h-[450px] overflow-y-auto flex items-center justify-center p-6">
      <div className="flex w-full flex-col">
        {!isLoggedIn ? (
          <div
            id="second"
            className="p-5   z-[999] flex flex-col items-center justify-center  mb-5">
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
        <div className="w-full py-4 px-5 border-b border-slate-200 rounded-sm items-center justify-center text-lg flex space-x-16">
          {types.map((elem, index) => (
            <button
              key={index}
              onClick={() => setSelectedKeyword(elem)}
              className="capitalize">
              {elem}
            </button>
          ))}
        </div>
        {submitState.loading ? (
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
        )}
      </div>
    </div>
  )
}

export default IndexPopup
