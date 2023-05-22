import React from "react"

import ProsHeader from "../Prospects/ProsHeader"
import ProsList from "../Prospects/ProsList"
import EmailList from "./EmailList"

export default function EmailBody({ keywordData }) {
  console.log(keywordData)
  return (
    <div className="w-full mt-2 border-2 border-slate-400 flex flex-col items-center ">
      <ProsHeader />
      <div className="mb-4">
        {keywordData &&
          keywordData.map((elem: any) => (
            <div>
              <EmailList emailID={elem.email} />
            </div>
          ))}
        {/* {keywordData &&
          keywordData.map((elem) => <EmailList email={elem.email} />)} */}
      </div>
    </div>
  )
}
