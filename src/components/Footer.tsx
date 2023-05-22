import user from "data-base64:~assets/user.svg"
import React from "react"

export default function Footer({ userData }) {
  return (
    <div className="flex w-full  rounded-lg items-center space-x-3 pt-2">
      <div className="flex h-16 w-20 items-center justify-center rounded-lg">
        <img className="h-[40px]" src={user} alt="" />
      </div>
      <div className="h-16 flex flex-col items-start justify-center w-full">
        <div className="font-bold text-xl">Sharan Veerabathini </div>
        <div className="text-base">sharan.veerabathini@500apps.com</div>
      </div>
    </div>
  )
}
