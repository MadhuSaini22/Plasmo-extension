import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import email from "data-base64:~assets/email.svg"
import tech from "data-base64:~assets/tech.svg"
import twoPersons from "data-base64:~assets/two-persons.svg"
import React from "react"

export default function MenuBar({ types, setSelectedKeyword }) {
  return (
    <div className="w-full mt-3 py-2 border-b-2 border-slate-400 items-center justify-between text-lg flex">
      {/* {types.map((elem, index) => ( */}
      <button
        //    key={index}
        //    onClick={() => setSelectedKeyword(elem)}
        className="capitalize">
        <div className="flex items-center space-x-1">
          <img className="h-[22px]" src={tech} alt="" />
          <span className="text-center text-sm">Technologies (57)</span>
        </div>
      </button>
      <button
        //    key={index}
        //    onClick={() => setSelectedKeyword(elem)}
        className="capitalize">
        <div className="flex items-center space-x-1">
          <img className="h-[15px]" src={twoPersons} alt="" />
          <span className="text-center text-sm">Prospects (128)</span>
        </div>
      </button>
      <button
        //    key={index}
        //    onClick={() => setSelectedKeyword(elem)}
        className="capitalize">
        <div className="flex items-center space-x-1">
          <img className="h-[14px]" src={email} alt="" />
          <span className="text-center text-sm">Emails (57)</span>
        </div>
      </button>
      {/* ))} */}
    </div>
  )
}
