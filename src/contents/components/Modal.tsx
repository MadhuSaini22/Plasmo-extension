import email from "data-base64:~assets/email-grey.svg"
import linkedin from "data-base64:~assets/linkedin-color.svg"
import person from "data-base64:~assets/person.svg"
import SearchLogo from "data-base64:~assets/searchlogo.svg"
import suitcase from "data-base64:~assets/suitcase.svg"
import telephone from "data-base64:~assets/telephone.svg"
import twitter from "data-base64:~assets/twitter-color.svg"

import { translation } from "~translate"

import { config } from "../../config"

const ModalElem: React.FC<{}> = () => {
  return (
    <div id="rendered_modal" className="border border-gray-700 gap-y-4 flex flex-col rounded-lg w-[400px] h-[350px]">
      <div className="flex gap-x-4">
        <div className="w-12 h-12">
          <img className="object-cover pt-.5" src={SearchLogo} />
        </div>
        <div style={{ fontSize: "18px" }}>{translation.Finder_io}</div>
      </div>
      <div className="rounded-md p-4" style={{ border: "1px solid black", borderRadius: "10px" }}>
        <div className="flex gap-x-6">
          <div className="w-24 h-24">
            <img
              className="object-cover"
              src="#"
              alt="linkedin"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-lg">LinkedIn</div>
            <div className="text-sm">Scraton, Pennslyvania</div>
            <div className="text-sm">100-250, Paper & Textile Goods</div>
          </div>
        </div>
      </div>
      <div className="rounded-md p-4 h-full" style={{ border: "1px solid black", borderRadius: "10px" }}>
        <div className="flex justify-evenly rounded-lg">
          <div className="w-16 h-16">
            <img className="w-full h-full" src={person} alt="" />
          </div>
          <div className="font-bold text-[18px] pt-4 text-black">Ketan</div>
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <div className="">
            <div className="space-x-3 italic text-zinc-500 flex">
              <div className=" space-x-2 flex items-center">
                <img className="" src={email} alt="" />
                <span className="text-[14px]">test@gmail.com</span>
              </div>
            </div>

            <div className="space-x-3 italic text-zinc-500 flex">
              <div className=" space-x-2 flex  items-center">
                <img className="" src={telephone} alt="" />
                <span className="text-[14px]">99999999</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-1 mt-1">
            <a href={`https://www.google.com`} target="_blank">
              <img src={linkedin} alt="Linkedin" className="h-6 w-6 cursor-pointer" />
            </a>

            <a href={`https://www.google.com`} target="_blank">
              <img src={twitter} alt="Twitter" className="h-6 w-6 cursor-pointer" />
            </a>
          </div>
          <a href={config?.basePage} target="_blank" className="text-[14px] italic text-blue-500">
            Click here to unlock
          </a>
        </div>
      </div>
      <div className="rounded-md p-2">
        <div className="text-lg">test@gmail.com</div>
      </div>
    </div>
  )
}

export default ModalElem
