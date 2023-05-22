import email from "data-base64:~assets/email-grey.svg"
import person from "data-base64:~assets/person.svg"
import React from "react"

export default function EmailList({ emailID }) {
  return (
    <div className="flex  w-[451px] h-[47px] mt-2 mx-4 rounded-lg border-2 border-gray-400 items-center   space-x-3 p-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg">
        <img className="h-[40px] w-full" src={person} alt="" />
      </div>
      <div className="w-full flex items-center justify-between">
        <div>
          <div className="font-semibold text-sm text-zinc-500">James Wood</div>

          <div className="space-x-3 italic text-zinc-500 flex">
            <div className="text-[10px] space-x-2 flex items-center">
              <img className="h-[8px]" src={email} alt="" />
              <span>{emailID}</span>
            </div>
          </div>
        </div>

        <a href="https:google.com" className="text-xs italic text-blue-500">
          2 Sources
        </a>
        <div className="flex border-2 border-gray-400 items-center rounded-lg justify-between">
          <div className="block italic text-gray-400 w-full py-1 px-3 items-center">
            Add to Contacts
          </div>
        </div>
      </div>
    </div>
  )
}
