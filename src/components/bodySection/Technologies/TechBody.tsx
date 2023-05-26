import React, { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import SkeletonLoader from "~components/loaders/SkeletonLoader"
import { fetchData } from "~utils"

import TechButton from "./TechButton"
import TechHeader from "./TechHeader"

export default function TechBody({ domain, token }) {
  const [keywordData, setKeywordData] = useState<any>()
  const [submitState, setSubmitState] = useState<any>({
    loading: false,
    error: undefined
  })

  useEffect(() => {
    fetchData(
      setSubmitState,
      setKeywordData,
      sendToBackground,
      "technologies",
      false,
      domain,
      token
    )
  }, [])

  return (
    <div className="">
      <TechHeader />

      {keywordData ? (
        <>
          {keywordData.length > 0 ? (
            <div className="overflow-y-auto h-[236px] py-5 px-1 border-2 border-slate-400 ">
              <div className=" grid grid-cols-3 grid-flow-row gap-3">
                {keywordData.map((elem) => (
                  <TechButton item={elem} />
                ))}
              </div>
            </div>
          ) : (
            <div className="h-[252px] border-2 border-slate-400  text-center">
              No data exists
            </div>
          )}
        </>
      ) : (
        <div className="h-[236px] px-1 border-2 border-slate-400">
          <SkeletonLoader
            boxLoaderHeight="33px"
            boxLoaderWidth="456px"
            customClass="w-[33px] h-[456px]"
            parentClass=" pt-2 grid grid-cols-3 grid-flow-row gap-2 "
            gridCount={12}
          />
        </div>
      )}
    </div>
  )
}
