import email from "data-base64:~assets/email.svg"
import tech from "data-base64:~assets/tech.svg"
import twoPersons from "data-base64:~assets/two-persons.svg"
import React from "react"

export default function MenuBar({
  types,
  setSelectedKeyword,
  selectedKeyword,
  keywordData
}) {
  return (
    <div className="w-full mt-3 py-2 border-b-2 border-slate-400 items-center justify-between text-lg flex">
      {/* {types.map((elem, index) => ( */}
      <button
        onClick={() => setSelectedKeyword("technologies")}
        className="capitalize">
        <div className="flex items-center space-x-1">
          <img className="h-[22px]" src={tech} alt="" />
          <span
            className={`text-center text-sm ${
              selectedKeyword == "technologies" ? "text-blue-500" : "text-black"
            }`}>
            Technologies (
            {keywordData.technologies ? keywordData.technologies : 50})
          </span>
        </div>
      </button>
      <button
        onClick={() => setSelectedKeyword("prospects")}
        className="capitalize">
        <div className="flex items-center space-x-1">
          <img className="h-[15px]" src={twoPersons} alt="" />
          <span
            className={`text-center text-sm ${
              selectedKeyword == "prospects" ? "text-blue-500" : "text-black"
            }`}>
            Prospects ({keywordData.prospects ? keywordData.prospects : 50})
          </span>
        </div>
      </button>
      <button
        onClick={() => setSelectedKeyword("emails")}
        className="capitalize">
        <div className="flex items-center space-x-1">
          <img className="h-[14px]" src={email} alt="" />
          <span
            className={`text-center text-sm ${
              selectedKeyword == "emails" ? "text-blue-500" : "text-black"
            }`}>
            Emails ({keywordData.emails ? keywordData.emails : 50})
          </span>
        </div>
      </button>
      {/* ))} */}
    </div>
  )
}
