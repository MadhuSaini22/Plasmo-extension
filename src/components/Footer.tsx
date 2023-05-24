import user from "data-base64:~assets/user.svg"
import React from "react"

import { config } from "~config"

import SkeletonLoader from "./loaders/SkeletonLoader"

export default function Footer({ userData }) {
  return (
    <>
      {userData ? (
        <>
          {Object.keys(userData).length == 0 ? (
            <div className="w-[470px] h-[64px]">Unable to fetch user</div>
          ) : (
            <a href={config.homePage} target="_blank" className="w-full">
              <div className="flex w-full rounded-lg items-center justify-start space-x-3 pt-2">
                <div className="flex h-16 w-20 items-center justify-center rounded-lg">
                  <img className="h-[40px]" src={user} alt="" />
                </div>

                <div className="h-16 flex flex-col items-start justify-center w-full">
                  {/* <div className="font-bold text-xl">{userData?.name}</div> */}
                  <div className="text-base">{userData?.email}</div>
                </div>
              </div>
            </a>
          )}
        </>
      ) : (
        <SkeletonLoader
          boxLoaderHeight="64px"
          boxLoaderWidth="470px"
          customClass="my-1"
          gridCount={1}
        />
      )}
    </>
  )
}
