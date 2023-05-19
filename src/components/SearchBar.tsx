import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import React from "react"

import { translation } from "~translate"

export default function SearchBar() {
  return (
    <div className="relative w-full border-b-2 border-gray-400 ">
      <div className="pointer-events-none absolute inset-y-0 flex items-center rounded-md bg-blue-500 left-3 px-2 m-1">
        <MagnifyingGlassIcon className="w-4 h-5 text-white" />
      </div>

      <input
        type="text"
        name="text"
        id="text"
        className="block  outline-none text-lg placeholder:font-bold placeholder:text-black w-full py-1 pl-16 sm:text-sm sm:leading-6"
        placeholder={translation.Finder_io}
      />
    </div>
  )
}
