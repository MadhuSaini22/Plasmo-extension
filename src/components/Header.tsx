import { MapPinIcon } from "@heroicons/react/24/outline"
import building from "data-base64:~assets/building.svg"
import globe from "data-base64:~assets/globe.png"
import group from "data-base64:~assets/group.svg"
import linkedin from "data-base64:~assets/linkedin.png"
import twitter from "data-base64:~assets/twitter.png"
import React from "react"

import { getStringBeforeTLD } from "~utils"

import SkeletonLoader from "./loaders/SkeletonLoader"

export default function Header({ domainData }: any) {
  let name
  if (domainData && domainData?.company_website) {
    name = getStringBeforeTLD(domainData?.company_website)
  }
  return (
    <div className="flex w-full mt-3 rounded-lg border-2 border-gray-400 items-center   space-x-3 p-3">
      {domainData ? (
        <>
          {Object.keys(domainData).length == 0 ? (
            <div className="w-[456px] h-[64] text-center">
              Unable to fetch domain
            </div>
          ) : (
            <>
              <div className="flex h-[70px] w-20 items-center justify-center rounded-lg border-2 border-gray-400 ">
                <img
                  className="max-h-[30px]"
                  src={`https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png`}
                  alt=""
                />
              </div>
              <div className="h-[70px] space-y-1 w-full">
                <div className="space-x-3 flex">
                  <div className="font-bold text-xl max-w-[280px] line-clamp-1">
                    {name ? name : ""}
                  </div>
                  <div className="flex justify-center items-center space-x-3 mt-1">
                    {domainData && domainData?.company_linkedin_url && (
                      <a
                        href={`https://${domainData?.company_linkedin_url}`}
                        target="_blank">
                        <img
                          src={linkedin}
                          alt="Five cats looking around a field."
                          className="h-[16px] w-[16px] cursor-pointer"
                        />
                      </a>
                    )}
                    {domainData && domainData?.company_twitter_url && (
                      <a
                        href={`https://${domainData?.company_twitter_url}`}
                        target="_blank">
                        <img
                          src={twitter}
                          alt="Five cats looking around a field."
                          className="h-[16px] w-[16px] cursor-pointer"
                        />
                      </a>
                    )}

                    {domainData && domainData?.company_website && (
                      <a
                        href={`https://${domainData?.company_website}`}
                        target="_blank">
                        <img
                          src={globe}
                          alt="Five cats looking around a field."
                          className="h-[16px] w-[16px] cursor-pointer"
                        />
                      </a>
                    )}
                  </div>
                </div>
                <div className="space-x-3 italic text-zinc-500 flex">
                  {domainData && domainData?.company_size && (
                    <div className="text-[11px] space-x-2 flex">
                      <img className="h-[18px]" src={group} alt="" />
                      <span>{domainData?.company_size}</span>
                    </div>
                  )}

                  {domainData && domainData?.company_industry && (
                    <div className="text-[11px] space-x-2 flex">
                      <img className="h-[18px]" src={building} alt="" />

                      <span>{domainData?.company_industry}</span>
                    </div>
                  )}
                </div>
                <div className="space-x-3 italic text-zinc-500 flex">
                  {domainData && domainData?.company_location_name && (
                    <div className="text-[11px] space-x-2 flex">
                      <MapPinIcon className="w-4 h-4 text-black" />
                      <span>{domainData?.company_location_name}</span>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <SkeletonLoader
          boxLoaderHeight="70px"
          boxLoaderWidth="448px"
          customClass=""
          gridCount={1}
        />
      )}
    </div>
  )
}
