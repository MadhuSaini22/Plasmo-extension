import React from "react"

import { config } from "~config"
import { translation } from "~translate"

export default function IsLoggedIn() {
  return (
    <div
      id="second"
      className="p-5 z-[999] flex flex-col items-center justify-center mb-5">
      <span className=" my-3 text-lg text-center font-bold">
        {translation.LoginText}
      </span>
      <button
        onClick={() => chrome.tabs.create({ url: `${config.homePage}` })}
        className={`py-3 flex items-center justify-center space-x-3 px-8 rounded-lg w-[120px] h-[50px] text-white font-bold text-base bg-violet-400 hover:bg-violet-500 `}>
        <span>{translation.Login}</span>
      </button>
    </div>
  )
}
