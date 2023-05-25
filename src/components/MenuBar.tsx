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
    <div className="w-full py-2 flex items-center text-lg">
      <button
        onClick={() => setSelectedKeyword("technologies")}
        className={`capitalize w-full border-b-2 py-3 ${
          selectedKeyword == "technologies"
            ? "border-blue-500"
            : "border-gray-400"
        }`}>
        <div className="flex items-center justify-center space-x-1">
          <img className="h-[20px]" src={tech} alt="" />
          <span
            className={`text-center text-sm ${
              selectedKeyword == "technologies" ? "text-blue-500" : "text-black"
            }`}>
            Technologies
            {keywordData.technologies ? (
              <> ({keywordData.technologies}) </>
            ) : (
              " (0) "
              // <SkeletonLoader
              //   boxLoaderHeight="5px"
              //   boxLoaderWidth="5px"
              //   customClass="w-5 h-5"
              //   parentClass="   "
              //   gridCount={1}
              // />
            )}
          </span>
        </div>
      </button>
      <button
        onClick={() => setSelectedKeyword("prospects")}
        className={`capitalize w-full border-b-2 py-3 ${
          selectedKeyword == "prospects" ? "border-blue-500" : "border-gray-400"
        }`}>
        <div className="flex items-center justify-center space-x-1">
          <img className="h-[15px]" src={twoPersons} alt="" />
          <span
            className={`text-center text-sm ${
              selectedKeyword == "prospects" ? "text-blue-500" : "text-black"
            }`}>
            Prospects
            {keywordData.prospects ? <> ({keywordData.prospects}) </> : " (0) "}
          </span>
        </div>
      </button>
      <button
        onClick={() => setSelectedKeyword("emails")}
        className={`capitalize w-full border-b-2 py-3 ${
          selectedKeyword == "emails" ? "border-blue-500" : "border-gray-400"
        }`}>
        <div className="flex items-center justify-center space-x-1">
          <img className="h-[14px]" src={email} alt="" />
          <span
            className={`text-center text-sm ${
              selectedKeyword == "emails" ? "text-blue-500" : "text-black"
            }`}>
            Emails{" "}
            {keywordData.emails ? <> ({keywordData.emails}) </> : " (0) "}
          </span>
        </div>
      </button>
      {/* ))} */}
    </div>
  )
}
