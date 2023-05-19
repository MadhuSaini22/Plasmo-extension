import React from "react"

import ProsHeader from "./ProsHeader"
import ProsList from "./ProsList"

export default function ProsBody() {
  return (
    <div className="w-full mt-2 border-2 border-slate-400 flex flex-col items-center ">
      <ProsHeader />
      <div className="mb-4">
        <ProsList />
        <ProsList />
        <ProsList />
        <ProsList />
      </div>
    </div>
  )
}
