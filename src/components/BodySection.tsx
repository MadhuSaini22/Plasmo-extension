import React from "react"

import EmailBody from "./bodySection/Emails/EmailBody"
import ProsBody from "./bodySection/Prospects/ProsBody"
import TechBody from "./bodySection/Technologies/TechBody"

export default function BodySection({
  selectedKeyword,
  domain,
  token,
  keywordData
}: any) {
  return (
    <div>
      {selectedKeyword == "technologies" && (
        <TechBody domain={domain} token={token} />
      )}
      {selectedKeyword == "prospects" && (
        <ProsBody
          domain={domain}
          token={token}
          pros_count={keywordData.prospects}
        />
      )}
      {selectedKeyword == "emails" && (
        <EmailBody
          domain={domain}
          token={token}
          email_count={keywordData.emails}
        />
      )}
    </div>
  )
}
