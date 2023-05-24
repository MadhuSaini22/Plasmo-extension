import { HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/outline"
import email from "data-base64:~assets/email-grey.svg"
import linkedin from "data-base64:~assets/linkedin-color.svg"
import person from "data-base64:~assets/person.svg"
import suitcase from "data-base64:~assets/suitcase.svg"
import telephone from "data-base64:~assets/telephone.svg"
import twitter from "data-base64:~assets/twitter-color.svg"
import React from "react"

import { config } from "~config"

export default function ProsList({ item }) {
  return (
    <div className="flex  w-[451px] h-[47px] mx-1 rounded-lg border-2 border-gray-400 items-center   space-x-3 p-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg">
        <img className="h-[40px] w-full" src={person} alt="" />
      </div>
      <div className="w-full flex items-center justify-between">
        <div>
          <div className="space-x-3 flex">
            <div className="font-semibold text-sm overflow-hidden line-clamp-1 w-[90px] text-zinc-500">
              {item?.name}
            </div>
            <div className="flex justify-center space-x-1 mt-1">
              <a href={item?.company_linkedin_url} target="_blank">
                <img
                  src={linkedin}
                  alt="Linkedin"
                  className="h-[12px] cursor-pointer"
                />
              </a>
              <a href={item?.company_twitter_url} target="_blank">
                <img
                  src={twitter}
                  alt="Twitter"
                  className="h-[12px] cursor-pointer"
                />
              </a>
            </div>
          </div>

          <div className="space-x-3 italic text-zinc-500 flex">
            <div className="text-[10px] space-x-2 flex">
              <img className="h-[12px]" src={suitcase} alt="" />
              <span className="line-clamp-1 w-[80px]">{item?.job_title}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="space-x-3 italic text-zinc-500 flex">
            <div className="text-[10px] space-x-2 flex items-center">
              <img className="h-[8px]" src={email} alt="" />
              <span className=" w-[110px] line-clamp-1">{item.email_id}</span>
            </div>
          </div>

          <div className="space-x-3 italic text-zinc-500 flex">
            <div className="text-[10px] space-x-2 flex  items-center">
              <img className="h-[8px]" src={telephone} alt="" />
              <span>+19************</span>
            </div>
          </div>
        </div>
        <a
          href={config.basePage}
          target="_blank"
          className="text-xs italic text-blue-500">
          Click here to unlock
        </a>
      </div>
    </div>
  )
}
