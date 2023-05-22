import { MapPinIcon } from "@heroicons/react/24/outline"
import building from "data-base64:~assets/building.svg"
import globe from "data-base64:~assets/globe.png"
import group from "data-base64:~assets/group.svg"
import linkedin from "data-base64:~assets/linkedin.png"
import twitter from "data-base64:~assets/twitter.png"
import React from "react"

export default function Header() {
  return (
    <div className="flex  w-full mt-3 rounded-lg  border-2 border-gray-400 items-center   space-x-3 p-2">
      <div className="flex h-16 w-20 items-center justify-center rounded-lg border-2 border-gray-400 ">
        <img
          className="max-h-[30px]"
          src={`https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png`}
          alt=""
        />
      </div>
      <div className="h-16 w-full">
        <div className="space-x-3 flex">
          <div className="font-bold text-xl">Salesforce </div>
          <div className="flex justify-center space-x-3 mt-1">
            <img className="max-h-[16px]" src={linkedin} alt="" />
            <img className="max-h-[16px]" src={twitter} alt="" />
            <img className="max-h-[16px]" src={globe} alt="" />
          </div>
        </div>

        <div className="space-x-3 italic text-zinc-500 flex">
          <div className="text-[10px] space-x-2 flex">
            {/* <UserGroupIcon className="w-4 h-4 text-black" /> */}
            <img className="h-[18px]" src={group} alt="" />
            <span>100-250</span>
          </div>
          <div className="text-[10px] space-x-2 flex">
            {/* <HomeModernIcon className="w-4 h-4 text-black" /> */}
            <img className="h-[18px]" src={building} alt="" />

            <span>Paper and Textile Goods</span>
          </div>
        </div>

        <div className="space-x-3 italic text-zinc-500 flex">
          <div className="text-[10px] space-x-2 flex">
            <MapPinIcon className="w-4 h-4 text-black" />
            <span>Scranton, Pennsylvania, USA</span>
          </div>
        </div>
      </div>
    </div>
  )
}
