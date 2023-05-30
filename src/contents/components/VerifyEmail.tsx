import React, { useState } from "react"

import { sendToBackground } from "@plasmohq/messaging"

import SearchLogo from "./SearchLogo"

const VerifyEmail = ({ email }) => {
  const [loading, setLoading] = useState(false)

  return (
    <>
      <div
        style={{
          cursor: "pointer",
          position: "absolute",
          top: -20,
          bottom: 0,
          left: 20,
          right: 0
        }}
        onClick={async () => {
          setLoading(true)
          const currentData: any = await sendToBackground({
            name: "verify-cookie",
            body: email
          })
          setLoading(false)
          if (currentData.message) alert(currentData.message)
        }}>
        {loading ? <Loader /> : <SearchLogo />}
      </div>
    </>
  )
}

export default VerifyEmail

function Loader() {
  return (
    <div
      style={{
        marginTop: 2,
        backgroundColor: "#335EEA",
        borderRadius: 3,
        height: 25,
        width: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <svg
        height={25}
        width={25}
        version="1.1"
        id="L9"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        enable-background="new 0 0 0 0"
        xmlSpace="preserve">
        <path
          fill="#fff"
          d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 50 50"
            to="360 50 50"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}
