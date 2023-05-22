import React from "react"

import TechButton from "./TechButton"
import TechHeader from "./TechHeader"

export default function TechBody() {
  return (
    <div className="">
      <TechHeader />
      <div className="mt-2 border-2 border-slate-400 pt-5 pb-9 px-1 grid grid-cols-3 grid-flow-row gap-2">
        <TechButton />
        <TechButton />
        <TechButton />
        <TechButton />
        <TechButton />
        <TechButton />
        <TechButton />
        <TechButton />
      </div>
    </div>
  )
}
