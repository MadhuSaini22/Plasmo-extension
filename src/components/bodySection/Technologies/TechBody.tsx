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
            <div className=" h-[252px] overflow-y-auto border-2 border-slate-400 pt-5 pb-9 px-1 grid grid-cols-3 grid-flow-row gap-2">
              {keywordData.map((elem) => (
                <TechButton item={elem} />
              ))}
            </div>
          ) : (
            <div className="h-[228px] text-center">No data exists</div>
          )}
        </>
      ) : (
        <SkeletonLoader
          boxLoaderHeight="33px"
          boxLoaderWidth="456px"
          customClass="space-y-2  h-[252px]"
          gridCount={4}
        />
      )}
    </div>
  )
}
