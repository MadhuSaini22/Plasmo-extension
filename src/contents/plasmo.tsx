import ReactDOM from "react-dom/client"

import VerifyEmail from "./components/VerifyEmail"

export const getRootContainer = () =>
  new Promise(() => {
    const checkInterval = setInterval(() => {
      clearInterval(checkInterval)
      const textNodes = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT
      )
      let textNode
      while ((textNode = textNodes.nextNode())) {
        const emailAddresses = extractEmailAddresses(textNode.textContent)
        if (emailAddresses) {
          emailAddresses.forEach((email) => {
            console.log("node:", textNode)
            addButton(textNode, email)
          })
        }
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
  ReactDOM.createRoot(div).render(<VerifyEmail email={email} />)
  emailNode.parentElement.insertAdjacentElement("afterbegin", div)
}
