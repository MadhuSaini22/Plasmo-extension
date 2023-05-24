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
      <div className="mt-2 max-h-[228px] overflow-y-auto border-2 border-slate-400 pt-5 pb-9 px-1 grid grid-cols-3 grid-flow-row gap-2">
        {!submitState.loading ? (
          <>
            {keywordData &&
              keywordData.length > 0 &&
              keywordData.map((elem) => <TechButton item={elem} />)}
          </>
        ) : (
          <>
            <SkeletonLoader
              boxLoaderHeight="33px"
              boxLoaderWidth="456px"
              customClass=""
              gridCount={1}
            />
            <SkeletonLoader
              boxLoaderHeight="33px"
              boxLoaderWidth="456px"
              customClass=""
              gridCount={1}
            />
            <SkeletonLoader
              boxLoaderHeight="33px"
              boxLoaderWidth="456px"
              customClass=""
              gridCount={1}
            />
            <SkeletonLoader
              boxLoaderHeight="33px"
              boxLoaderWidth="456px"
              customClass=""
              gridCount={1}
            />
            <SkeletonLoader
              boxLoaderHeight="33px"
              boxLoaderWidth="456px"
              customClass=""
              gridCount={1}
            />
            <SkeletonLoader
              boxLoaderHeight="33px"
              boxLoaderWidth="456px"
              customClass=""
              gridCount={1}
            />
            <SkeletonLoader
              boxLoaderHeight="33px"
              boxLoaderWidth="456px"
              customClass=""
              gridCount={1}
            />
            <SkeletonLoader
              boxLoaderHeight="33px"
              boxLoaderWidth="456px"
              customClass=""
              gridCount={1}
            />
            <SkeletonLoader
              boxLoaderHeight="33px"
              boxLoaderWidth="456px"
              customClass=""
              gridCount={1}
            />
            <SkeletonLoader
              boxLoaderHeight="33px"
              boxLoaderWidth="456px"
              customClass=""
              gridCount={1}
            />
          </>
        )}
      </div>
    </div>
  )
}
