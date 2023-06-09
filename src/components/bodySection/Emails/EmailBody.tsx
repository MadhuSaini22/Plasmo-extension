import React, { useEffect, useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import SkeletonLoader from "~components/loaders/SkeletonLoader"
import { fetchData } from "~utils"

import ProsHeader from "../Prospects/ProsHeader"
import EmailList from "./EmailList"

export default function EmailBody({ domain, token, email_count }) {
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
      "emails",
      false,
      domain,
      token
    )
  }, [])

  return (
    <div className="w-full border-2 border-slate-400 flex flex-col items-center ">
      <ProsHeader website={domain} name={"Emails"} pros_count={email_count} />
      <div className="h-[228px] w-[476px] mt-2 overflow-y-auto">
        {submitState.loading ? (
          <SkeletonLoader
            boxLoaderHeight="44px"
            boxLoaderWidth="456px"
            customClass=""
            parentClass="space-y-2"
            gridCount={4}
          />
        ) : (
          <div className="px-3 space-y-2 ">
            {keywordData && keywordData.length > 0 ? (
              <>
                {keywordData.map((elem) => (
                  <EmailList item={elem} token={token} />
                ))}
              </>
            ) : (
              <div className="text-center">No data exists</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
