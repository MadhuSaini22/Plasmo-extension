import React from "react"

const SkeletonLoader = ({
  boxLoaderHeight,
  boxLoaderWidth,
  customClass,
  gridCount
}: any) => {
  if (gridCount) {
    return (
      <div className="">
        {Array.from(Array(gridCount).keys()).map((item) => {
          return (
            <div key={item} className="w-full ">
              <div className="flex animate-pulse ">
                <div
                  className={`bg-gray-300/50 rounded-xl px-4 py-2 max-w-full  mx-auto ${
                    customClass ? customClass : ""
                  }`}
                  style={{
                    height: boxLoaderHeight,
                    width: boxLoaderWidth
                  }}></div>
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className="w-full ">
        <div className="flex animate-pulse">
          <div
            className={`bg-gray-300/50 rounded-xl px-4 py-2 max-w-full mx-auto ${
              customClass ? customClass : ""
            }`}
            style={{ height: boxLoaderHeight, width: boxLoaderWidth }}></div>
        </div>
      </div>
    )
  }
}

export default SkeletonLoader
