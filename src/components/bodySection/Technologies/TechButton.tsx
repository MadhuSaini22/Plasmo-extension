import Analytics from "data-base64:~assets/analytics.svg"
import React from "react"

export default function TechButton({ item }) {
  return (
    <div className="border-2 border-gray-300 rounded-2xl px-3 py-1 flex space-x-1 items-center">
      <img className="h-5" src={Analytics} alt="" />
      <div className="text-xs max-w-[100px] w-full overflow-hidden">
        {item?.technology}
      </div>
    </div>
  )
}
