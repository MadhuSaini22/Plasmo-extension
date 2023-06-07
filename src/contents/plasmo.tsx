import "~output.css"

import ReactDOM from "react-dom/client"

import { config } from "../config"
import ModalElem from "./components/Modal"
import VerifyEmail from "./components/VerifyEmail"

export const getRootContainer = () =>
  new Promise(() => {
    const checkInterval = setInterval(() => {
      clearInterval(checkInterval)
      const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT)
      let textNode
      while ((textNode = textNodes.nextNode())) {
        const emailAddresses = extractEmailAddresses(textNode.textContent)
        if (emailAddresses) {
          emailAddresses.forEach((email) => {
            addButton(textNode, email)
          })
        }
      }

      if (config?.linkedin_regex.test(window.location.href) || true) {
        searchButton()
      }
    }, 137)
  })

function extractEmailAddresses(text) {
  const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g
  return text.match(regex)
}

function addButton(emailNode, email) {
  const div = document.createElement("div")
  div.style.position = "relative"
  div.style.display = "inline-block"
  div.style.verticalAlign = "middle"
  div.style.marginLeft = "6px"


  ReactDOM.createRoot(div).render(<VerifyEmail email={email} />)
  emailNode.parentElement.insertAdjacentElement("beforeend", div)
}

async function searchButton() {
  const elem = document.createElement("div")
  elem.innerHTML = `<svg
  width="20"
  height="20"
  viewBox="0 0 191 208"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M35.9443 149.043C14.9912 135.033 1 109.721 1 80.8251C1 36.7385 33.5629 1 73.7316 1C79.1906 1 84.509 1.6601 89.6262 2.91173L80.0996 16.2361C78.0081 15.9905 75.8828 15.8645 73.7316 15.8645C41.043 15.8645 14.5437 44.948 14.5437 80.8251C14.5437 103.466 25.0986 123.404 41.1028 135.03L35.9443 149.043ZM114.263 147.114C102.681 155.662 88.7364 160.648 73.7316 160.648C65.9653 160.648 58.4822 159.313 51.4644 156.839L60.9772 144.272C65.0852 145.262 69.352 145.785 73.7316 145.785C106.419 145.785 132.92 116.701 132.92 80.8251C132.92 55.6195 119.84 33.7678 100.724 22.998L105.815 9.16697C129.895 22.178 146.463 49.378 146.463 80.8251C146.463 97.3677 141.877 112.736 134.025 125.48L142.491 132.639L144.033 137.806C145.06 142.603 149.904 146.321 158.588 149.391C159.483 149.708 160.922 150.234 162.901 150.967C163.52 151.196 164.006 151.443 164.521 151.703L164.94 151.913C166.04 152.458 167.219 153.286 168.828 154.847C173.158 159.057 179.344 167.794 187.382 181.059C191.746 187.939 190.631 194.908 184.037 201.97C177.758 208.639 170.578 208.95 162.495 202.903C154.413 196.857 147.925 191.574 143.028 187.053C142.483 186.279 141.877 185.549 141.292 184.843C140.414 183.785 139.583 182.783 139.076 181.78C137.493 178.642 135.231 172.279 133.168 166.268C131.161 160.419 129.265 159.638 124.519 158.088C123.75 157.838 122.429 157.322 120.555 156.54L114.263 147.114ZM97.9875 6.35122L39.78 87.9398L68.3361 86.8968L44.542 151.533L111.791 61.911L77.5362 61.9047L97.9875 6.35122Z"
    fill="#2B28E2"
    stroke="white"
    stroke-width="0.4"
  />
</svg>`
  elem.style.marginLeft = "15px"
  elem.style.marginTop = "6px"
  elem.style.cursor = "pointer"
  let modalElem = document.createElement("div")
  modalElem.classList.add("hidden");
  modalElem.id = "modal-elem"
  //@ts-ignore
  modalElem.style = `position:fixed;right:100px;top:100px;background:white;margin:5px;padding:20px;border:1px solid black;border-radius:10px;z-index:9999`
  const root = document.querySelector("h1.text-heading-xlarge")
  //@ts-ignore
  root.style = `display: flex!important;`
  root.insertAdjacentElement("beforeend", elem)
  document.body.prepend(modalElem)
  ReactDOM.createRoot(modalElem).render(<ModalElem />)
  elem.addEventListener("click", () => {
    if(document.querySelector("#modal-elem")) {
      document.querySelector("#modal-elem").classList.toggle("hidden")
    }
  })
  chrome.runtime.sendMessage({type:'get_token'}, (res) => {
    console.log(res)
  })
}
