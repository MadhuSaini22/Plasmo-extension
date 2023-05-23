import React from "react"

import TechButton from "./TechButton"
import TechHeader from "./TechHeader"

export default function TechBody({ keywordData }) {
  return (
    <div className="">
      <TechHeader />
      <div className="mt-2 max-h-[228px] overflow-y-auto border-2 border-slate-400 pt-5 pb-9 px-1 grid grid-cols-3 grid-flow-row gap-2">
        {keywordData &&
          keywordData.length > 0 &&
          keywordData.map((elem) => <TechButton item={elem} />)}
      </div>
    </div>
  )
}
