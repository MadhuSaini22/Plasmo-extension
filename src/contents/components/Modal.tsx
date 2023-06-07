import email from "data-base64:~assets/email-grey.svg"
import linkedin from "data-base64:~assets/linkedin-color.svg"
import person from "data-base64:~assets/person.svg"
import SearchLogo from "data-base64:~assets/searchlogo.svg"
import suitcase from "data-base64:~assets/suitcase.svg"
import telephone from "data-base64:~assets/telephone.svg"
import twitter from "data-base64:~assets/twitter-color.svg"
import { XMarkIcon, UserGroupIcon, HomeModernIcon, MapPinIcon } from "@heroicons/react/24/outline"

import { translation } from "~translate"

import { useEffect, useState } from "react"

const ModalElem: React.FC<{}> = () => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    chrome.runtime.sendMessage({ type: "get_token", url: 'https://api.eu1.500apps.com/elastic/search?offset=0&limit=50&where=linkedin_url%20like%20%27%25linkedin.com%2Fin%2Fsumit-jain-sumit-rinchan-7453b316%25%27' }, (res) => {
      setUser(res[0])
      console.log(res)
    })
  }, [])

  function closeHandler() {
    document.querySelector("#modal-elem") && document.querySelector("#modal-elem").classList.toggle("hidden")
  }

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
      <div className="rounded-md p-4" style={{ border: "1px solid black", borderRadius: "10px" }}>
        <div className="flex gap-x-6">
          <div className="w-28 h-28" style={{ border: "1px solid black", borderRadius: "10px" }}>
            <img
              className="w-full h-full p-2 object-cover"
              src={linkedin}
              alt="linkedin"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-[18px] font-semibold">LinkedIn</div>
            <div className="text-[12px]">
              <div className="flex gap-x-3"><UserGroupIcon className="w-6 h-6" /><span>{user?.company_size}</span></div>
              <div className="flex gap-x-3"><HomeModernIcon className="w-6 h-6" /><span>{user?.company_industry}</span></div>
              <div className="flex gap-x-3"><MapPinIcon className="w-6 h-6" /><span>{user?.company_location_name}</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-md p-4 h-full" style={{ border: "1px solid black", borderRadius: "10px" }}>
        <div className="flex justify-evenly rounded-lg">
          <div className="w-16 h-16">
            <img className="w-full h-full" src={person} alt="" />
          </div>
          <div className="font-bold text-[18px] pt-4 text-black">{user?.name ?? ""}</div>
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <div className="">
            <div className="space-x-3 italic text-zinc-500 flex">
              <div className=" space-x-2 flex items-center">
                <img className="w-6 h-6" src={suitcase} alt="" />
                <span className="text-[14px]">Company Name: {user?.company_name ?? ""}</span>
              </div>
            </div>
            <div className="space-x-3 italic text-zinc-500 flex">
              <div className=" space-x-2 flex items-center">
                <img className="w-6 h-6" src={email} alt="" />
                <span className="text-[14px]">Email: {user?.email ?? ""}</span>
              </div>
            </div>

            <div className="space-x-3 italic text-zinc-500 flex">
              <div className=" space-x-2 flex  items-center">
                <img className="w-6 h-6" src={telephone} alt="" />
                <span className="text-[14px]">Phone No: {user?.phone_numbers?.[0] ?? ""}</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-4 ">
            <div>Socials: </div>
            <a href={user?.company_linked_url ?? "#"} target="_blank">
              <img src={linkedin} alt="Linkedin" className="h-6 w-6 mt-1 cursor-pointer" />
            </a>
            <a href={user?.company_twitter_url ?? "#"} target="_blank">
              <img src={twitter} alt="Twitter" className="h-6 w-6 mt-1 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
      <div className="rounded-md p-2">
        <div className="text-lg">{user?.name ?? ""}</div>
      </div>
    </div>
  )
}

export default ModalElem
