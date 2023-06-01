import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import React from "react"

export default function ProsHeader({
  email_count = 0,
  website = "",
  name = ""
}) {
  return (
    <div className="flex w-full px-4 mt-2 space-x-3 items-center justify-between">
      <div className="text-[11px] italic text-center font-bold">
        {email_count > 0 &&
          website &&
          `We have found ${email_count} ${name} in our database for ${website}`}
      </div>
      <div className="relative w-[120px] rounded-sm flex items-center shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 flex items-center left-2">
          <MagnifyingGlassIcon className="w-3 h-3 text-black" />
        </div>

        <input
          type="text"
          name="text"
          id="text"
          className="block border-2 outline-none border-gray-400 placeholder:text-[12px] placeholder:italic w-full rounded-[3px] py-1 pl-6 items-center sm:text-[12px] sm:leading-6"
          placeholder="Search Prospects"
        />
      </div>
    </div>
  )
}
