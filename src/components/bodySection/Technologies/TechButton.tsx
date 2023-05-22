import Analytics from "data-base64:~assets/analytics.svg"
import React from "react"

export default function TechButton() {
  return (
    <div className="border-2 border-gray-300 rounded-2xl px-3 py-1 flex space-x-1 items-center justify-center">
      <img className="h-7" src={Analytics} alt="" />
      <div className="text-xs">Google Analytics</div>
    </div>
  )
}
