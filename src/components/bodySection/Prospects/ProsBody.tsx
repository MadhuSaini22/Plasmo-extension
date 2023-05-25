import React, { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import SkeletonLoader from "~components/loaders/SkeletonLoader"
import { fetchData } from "~utils"

import ProsHeader from "./ProsHeader"
import ProsList from "./ProsList"

export default function ProsBody({ domain, token }) {
  const [keywordData, setKeywordData] = useState<any>()
  const [submitState, setSubmitState] = useState<any>({
    loading: false,
    error: undefined
  })

  useEffect(() => {
    token &&
      domain &&
      fetchData(
        setSubmitState,
        setKeywordData,
        sendToBackground,
        "prospects",
        false,
        domain,
        token
      )
  }, [domain, token])

  return (
    <div className="w-full border-2 border-slate-400 flex flex-col items-center ">
      <ProsHeader />
      <div className="h-[228px] w-[476px] mt-2 space-y-2 overflow-y-auto">
        {submitState.loading ? (
          <SkeletonLoader
            boxLoaderHeight="44px"
            boxLoaderWidth="456px"
            customClass=""
            parentClass="space-y-2"
            gridCount={4}
          />
        ) : (
          <>
            {keywordData && keywordData.length > 0 ? (
              <>
                {keywordData.map((elem) => (
                  <ProsList item={elem} />
                ))}
              </>
            ) : (
              <div className="text-center">No data exists</div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
