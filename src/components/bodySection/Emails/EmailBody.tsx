import React from "react"

import ProsHeader from "../Prospects/ProsHeader"
import EmailList from "./EmailList"

export default function EmailBody({ keywordData }) {
  return (
    <div className="w-full mt-2 border-2 border-slate-400 flex flex-col items-center ">
      <ProsHeader />
      <div className="mb-4 max-h-[228px] mt-2 space-y-2 overflow-y-auto">
        {keywordData &&
          keywordData.map((elem: any) => <EmailList item={elem} />)}
      </div>
    </div>
  )
}
