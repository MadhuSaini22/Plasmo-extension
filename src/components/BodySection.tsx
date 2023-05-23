import React from "react"

import EmailBody from "./bodySection/Emails/EmailBody"
import ProsBody from "./bodySection/Prospects/ProsBody"
import TechBody from "./bodySection/Technologies/TechBody"

export default function BodySection({
  selectedKeyword,
  keywordData,
  submitState
}) {
  return (
    <div>
      {selectedKeyword == "technologies" && (
        <TechBody keywordData={keywordData} submitState={submitState} />
      )}
      {selectedKeyword == "prospects" && <ProsBody keywordData={keywordData} />}
      {selectedKeyword == "emails" && <EmailBody keywordData={keywordData} />}
    </div>
  )
}
