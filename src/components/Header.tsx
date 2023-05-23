import { MapPinIcon } from "@heroicons/react/24/outline"
import building from "data-base64:~assets/building.svg"
import globe from "data-base64:~assets/globe.png"
import group from "data-base64:~assets/group.svg"
import linkedin from "data-base64:~assets/linkedin.png"
import twitter from "data-base64:~assets/twitter.png"
import React from "react"

import SkeletonLoader from "./loaders/SkeletonLoader"

export default function Header({ domainData }) {
  return (
    <div className="flex w-full mt-3 rounded-lg  border-2 border-gray-400 items-center   space-x-3 p-2">
      {domainData ? (
        <>
          <div className="flex h-16 w-20 items-center justify-center rounded-lg border-2 border-gray-400 ">
            <img
              className="max-h-[30px]"
              src={`https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png`}
              alt=""
            />
          </div>
          <div className="h-16 w-full">
            <div className="space-x-3 flex">
              <div className="font-bold text-xl max-w-[280px] line-clamp-1">
                {domainData?.company_name}
              </div>
              <div className="flex justify-center items-center space-x-3 mt-1">
                <a href={domainData?.company_linkedin_url} target="_blank">
                  <img
                    src={linkedin}
                    alt="Five cats looking around a field."
                    className="h-[16px] w-[16px] cursor-pointer"
                  />
                </a>
                <a href={domainData?.company_twitter_url} target="_blank">
                  <img
                    src={twitter}
                    alt="Five cats looking around a field."
                    className="h-[16px] w-[16px] cursor-pointer"
                  />
                </a>
                <a href={domainData?.company_website} target="_blank">
                  <img
                    src={globe}
                    alt="Five cats looking around a field."
                    className="h-[16px] w-[16px] cursor-pointer"
                  />
                </a>
              </div>
            </div>
            <div className="space-x-3 italic text-zinc-500 flex">
              <div className="text-[10px] space-x-2 flex">
                <img className="h-[18px]" src={group} alt="" />
                <span>{domainData?.company_size}</span>
              </div>
              <div className="text-[10px] space-x-2 flex">
                <img className="h-[18px]" src={building} alt="" />

                <span>{domainData?.company_industry}</span>
              </div>
            </div>
            <div className="space-x-3 italic text-zinc-500 flex">
              <div className="text-[10px] space-x-2 flex">
                <MapPinIcon className="w-4 h-4 text-black" />
                <span>{domainData?.company_location_name}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <SkeletonLoader
          boxLoaderHeight="84px"
          boxLoaderWidth="456px"
          customClass=""
          gridCount={1}
        />
      )}
    </div>
  )
}
