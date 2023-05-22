import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import React from "react"

export default function TechHeader() {
  return (
    <div className="flex justify-between">
      <div className="relative mt-2 rounded-md mb-3 shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 flex items-center left-2">
          <MagnifyingGlassIcon className="w-4 h-5 text-black" />
        </div>

        <input
          type="text"
          name="text"
          id="text"
          className="block border-2 outline-none border-gray-400 placeholder:italic w-full rounded-md py-1 pl-7 sm:text-sm sm:leading-6"
          placeholder="Search Technologies"
        />
      </div>
      <div className="relative mt-2 rounded-md mb-3 shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 flex items-center left-2">
          <FunnelIcon className="w-4 h-5 text-black" />
        </div>

        <input
          type="text"
          name="text"
          id="text"
          className="block border-2 outline-none border-gray-400 placeholder:italic w-full rounded-md py-1 pl-7 sm:text-sm sm:leading-6"
          placeholder="Filter by Category"
        />
      </div>
    </div>
  )
}
