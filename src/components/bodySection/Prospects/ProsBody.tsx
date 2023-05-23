import React, { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import SkeletonLoader from "~components/loaders/SkeletonLoader"
import { fetchData } from "~utils"

import ProsHeader from "./ProsHeader"
import ProsList from "./ProsList"

export default function ProsBody() {
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
      "prospects",
      false
    )
  }, [])

  return (
    <div className="w-full mt-2 border-2 border-slate-400 flex flex-col items-center ">
      <ProsHeader />
      <div className="mb-4 max-h-[228px] mt-2 space-y-2 overflow-y-auto">
        {submitState.loading ? (
          <SkeletonLoader
            boxLoaderHeight="44px"
            boxLoaderWidth="456px"
            customClass="space-y-2"
            gridCount={4}
          />
        ) : (
          <>
            {keywordData &&
              keywordData.length > 0 &&
              keywordData.map((elem) => <ProsList item={elem} />)}
          </>
        )}
      </div>
    </div>
  )
}
