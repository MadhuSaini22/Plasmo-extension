import email from "data-base64:~assets/email-grey.svg"
import person from "data-base64:~assets/person.svg"
import React, { useState } from "react"

import SpinnerLoader from "~components/loaders/SpinnerLoader"
import { addToContact } from "~utils"

export default function EmailList({ item, token }) {
  const [loading, setLoading] = useState(false)
  return (
    <div className="flex w-[451px] h-[47px] mx-1 rounded-lg border-2 border-gray-400 items-center   space-x-3 p-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg">
        <img className="h-[40px] w-full" src={person} alt="" />
      </div>
      <div className="w-full flex items-center justify-between">
        <div>
          <div className="font-semibold text-sm text-zinc-500">
            {item?.name}
          </div>

          <div className="space-x-3 italic text-zinc-500 flex">
            <div className="text-[10px] space-x-2 flex items-center">
              <img className="h-[8px]" src={email} alt="" />
              <span className="w-[130px] line-clamp-1">{item?.email_id}</span>
            </div>
          </div>
        </div>

        <a href="https:google.com" className="text-xs italic text-blue-500">
          2 Sources
        </a>
        <div className="flex border-2 border-gray-400 items-center rounded-lg justify-between">
          <button
            className="  italic text-gray-400 w-[130px] h-[26px] flex items-center justify-center py-1 px-3 "
            onClick={() => {
              setLoading(true)
              const body = {
                name: item.name,
                email: item.email_id,
                job_title: item.job_title,
                domain: item.company_website
              }

              addToContact(body, token)
              setTimeout(() => {
                setLoading(false)
              }, 1000)
            }}>
            {loading ? <SpinnerLoader /> : "Add to Contacts"}
          </button>
        </div>
      </div>
    </div>
  )
}
