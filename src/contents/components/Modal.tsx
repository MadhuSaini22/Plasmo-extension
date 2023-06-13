import { HomeModernIcon, MapPinIcon, UserGroupIcon, XMarkIcon } from "@heroicons/react/24/outline"
import email from "data-base64:~assets/email-grey.svg"
import linkedin from "data-base64:~assets/linkedin-color.svg"
import person from "data-base64:~assets/person.svg"
import SearchLogo from "data-base64:~assets/searchlogo.svg"
import suitcase from "data-base64:~assets/suitcase.svg"
import telephone from "data-base64:~assets/telephone.svg"
import twitter from "data-base64:~assets/twitter-color.svg"
import userImg from "data-base64:~assets/user.svg"
import { useEffect, useState } from "react"

import SkeletonLoader from "~components/loaders/SkeletonLoader"
import { scrapeData } from "~linkedin-scrapper"
import { translation } from "~translate"
import { parseJwt } from "~utils"

const ModalElem: React.FC<{}> = () => {
  const [profile, setProfile] = useState<any>(null)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
      document.querySelector("#search-button").addEventListener("click", async () => {
        if (document.querySelector("#modal-elem")) {
          chrome.runtime.sendMessage(
            {
              type: "get_token",
              url: `https://api.eu1.500apps.com/elastic/search?offset=0&limit=50&where=linkedin_url%20like%20%27%25${window.location.href
                .replace("https://www.", "")
                .slice(0, -1)}%25%27`
            },
            (res) => {
              setUser(parseJwt(res?.cookie))
              setProfile(res?.data?.[0])
              setLoading(false)
            }
          )
        }
        const scrapedData = await scrapeData()
        console.log({ scrapedData })
      })
  }, [])

  function closeHandler() {
    if (document.querySelector("#modal-elem").classList.contains("slide-in")) {
      document.querySelector("#modal-elem").classList.remove("slide-in");
      document.querySelector("#modal-elem").classList.add("slide-out");
      document.querySelector("#modal-overlay").classList.remove("show")
    } else if (document.querySelector("#modal-elem").classList.contains("slide-out")) {
      document.querySelector("#modal-elem").classList.remove("slide-out");
      document.querySelector("#modal-elem").classList.add("slide-in");
    } else {
      document.querySelector("#modal-elem").classList.add("slide-in");
    }
  }

  useEffect(() => {}, [profile])

  return (
    <div id="rendered_modal" className="border border-gray-700 gap-y-4 flex flex-col rounded-lg w-[400px] h-auto">
      <div className="flex gap-x-4 justify-between">
        <div className="w-12 h-12">
          <img className="object-cover pt-.5" src={SearchLogo} />
        </div>
        <div style={{ fontSize: "18px" }}>{translation.Finder_io}</div>
        <button onClick={() => closeHandler()}>
          <XMarkIcon className="w-12 h-12" />
        </button>
      </div>

      {loading || profile ? (
        <>
          <div className="rounded-md p-4" style={{ border: "1px solid black", borderRadius: "10px" }}>
            <div className="flex gap-x-6">
              <div className="w-28 h-28" style={{ border: "1px solid black", borderRadius: "10px" }}>
                <img className="w-full h-full p-2 object-cover" src={linkedin} alt="linkedin" />
              </div>
              <div className="flex flex-col">
                <div className="text-[18px] font-semibold">LinkedIn</div>
                <div className="text-[12px]">
                  <div className="flex gap-x-3">
                    <UserGroupIcon className="w-6 h-6" />
                    <span>
                      {loading ? (
                        <SkeletonLoader gridCount={1} boxLoaderHeight={"10px"} boxLoaderWidth={"35px"} />
                      ) : (
                        profile?.company_size ?? "----"
                      )}
                    </span>
                  </div>
                  <div className="flex gap-x-3">
                    <HomeModernIcon className="w-6 h-6" />
                    <span>
                      {loading ? (
                        <SkeletonLoader gridCount={1} boxLoaderHeight={"10px"} boxLoaderWidth={"45px"} />
                      ) : (
                        profile?.company_industry ?? "----"
                      )}
                    </span>
                  </div>
                  <div className="flex gap-x-3">
                    <MapPinIcon className="w-6 h-6" />
                    <span>
                      {loading ? (
                        <SkeletonLoader gridCount={1} boxLoaderHeight={"10px"} boxLoaderWidth={"50px"} />
                      ) : (
                        profile?.company_location_name ?? "----"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-md p-4 h-auto" style={{ border: "1px solid black", borderRadius: "10px" }}>
            <div className="flex justify-evenly rounded-lg">
              <div className="w-16 h-16">
                <img className="w-full h-full" src={person} alt="" />
              </div>
              <div className="font-bold text-[18px] pt-4 text-black">
                {loading ? (
                  <SkeletonLoader gridCount={1} boxLoaderHeight={"25px"} boxLoaderWidth={"80px"} />
                ) : (
                  profile?.name ?? "----"
                )}
              </div>
            </div>
            <div className="w-full flex flex-col gap-y-4">
              <div className="">
                <div className="space-x-3 italic text-zinc-500 flex">
                  <div className=" space-x-2 flex items-center">
                    <img className="w-6 h-6" src={suitcase} alt="" />
                    <span className="text-[14px] flex gap-x-3">
                      <span>Company Name: </span>
                      {loading ? (
                        <SkeletonLoader
                          parentClass={"mt-1"}
                          gridCount={1}
                          boxLoaderHeight={"14px"}
                          boxLoaderWidth={"60px"}
                        />
                      ) : (
                        <span>{profile?.company_name ?? "----"}</span>
                      )}
                    </span>
                  </div>
                </div>
                <div className="space-x-3 italic text-zinc-500 flex">
                  <div className=" space-x-2 flex items-center">
                    <img className="w-6 h-6" src={email} alt="" />
                    <span className="text-[14px] flex gap-x-3">
                      <span>Email: </span>
                      {loading ? (
                        <SkeletonLoader
                          parentClass={"mt-1"}
                          gridCount={1}
                          boxLoaderHeight={"14px"}
                          boxLoaderWidth={"60px"}
                        />
                      ) : (
                        <span>{profile?.email ?? "----"}</span>
                      )}
                    </span>
                  </div>
                </div>

                <div className="space-x-3 italic text-zinc-500 flex">
                  <div className=" space-x-2 flex  items-center">
                    <img className="w-6 h-6" src={telephone} alt="" />
                    <span className="text-[14px] flex gap-x-3">
                      <span>Phone No: </span>
                      {loading ? (
                        <SkeletonLoader
                          parentClass={"mt-1"}
                          gridCount={1}
                          boxLoaderHeight={"14px"}
                          boxLoaderWidth={"60px"}
                        />
                      ) : (
                        <span>{profile?.phone_numbers?.[0] ?? "----"}</span>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 ">
                <div>Socials: </div>
                {loading ? (
                  <>
                    <SkeletonLoader
                      parentClass={"mt-1"}
                      gridCount={1}
                      boxLoaderHeight={"14px"}
                      boxLoaderWidth={"50px"}
                    />
                  </>
                ) : (
                  <>
                    <a href={profile?.company_linked_url ?? "#"} target="_blank">
                      <img src={linkedin} alt="Linkedin" className="h-6 w-6 mt-1 cursor-pointer" />
                    </a>
                    <a href={profile?.company_twitter_url ?? "#"} target="_blank">
                      <img src={twitter} alt="Twitter" className="h-6 w-6 mt-1 cursor-pointer" />
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : !loading && !profile ? (
        <>
          <div className="text-[18px] font-bold text-center h-[200px] flex items-center justify-center">
            No Data Found
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="rounded-md p-2">
        <div className="flex gap-x-3">
          <img className="h-[25px]" src={userImg} alt="" />
          {loading ? (
            <SkeletonLoader parentClass={"mt-1"} gridCount={1} boxLoaderHeight={"14px"} boxLoaderWidth={"100px"} />
          ) : (
            <span className="text-[18px]">{user?.email ?? ""}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ModalElem
