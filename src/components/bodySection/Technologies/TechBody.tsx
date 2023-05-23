import React from "react"

import SkeletonLoader from "~components/loaders/SkeletonLoader"

import TechButton from "./TechButton"
import TechHeader from "./TechHeader"

export default function TechBody({ keywordData, submitState }) {
  return (
    <div className="">
      <TechHeader />
      <div className="mt-2 max-h-[228px] overflow-y-auto border-2 border-slate-400 pt-5 pb-9 px-1 grid grid-cols-3 grid-flow-row gap-2">
        {submitState.loading ? (
          <>
            {keywordData &&
              keywordData.length > 0 &&
              keywordData.map((elem) => <TechButton item={elem} />)}
          </>
        ) : (
          <SkeletonLoader
            boxLoaderHeight="47px"
            boxLoaderWidth="457px"
            customClass=""
            gridCount={4}
          />
        )}
      </div>
    </div>
  )
}
