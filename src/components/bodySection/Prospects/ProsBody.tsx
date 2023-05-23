import React from "react"

import ProsHeader from "./ProsHeader"
import ProsList from "./ProsList"

export default function ProsBody({ keywordData }) {
  return (
    <div className="w-full mt-2 border-2 border-slate-400 flex flex-col items-center ">
      <ProsHeader />
      <div className="mb-4 max-h-[228px] mt-2 space-y-2 overflow-y-auto">
        {keywordData &&
          keywordData.length > 0 &&
          keywordData.map((elem) => <ProsList item={elem} />)}
      </div>
    </div>
  )
}
