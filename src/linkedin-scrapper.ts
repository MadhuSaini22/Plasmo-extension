//  @ts-nocheck

export const linkedin_scrapper = {
  experience: () => {
    const scrapeExperience = (element) => {
      const jobTitle = element.querySelector(".t-bold [aria-hidden=true]")?.innerText || ""
      const companyName = element.querySelector(".t-normal [aria-hidden=true]")?.innerText || ""
      const jobExperience = element.querySelector(".t-normal.t-black--light [aria-hidden=true]")?.innerText || ""
      const jobLocation =
        element.querySelector(".t-normal.t-black--light:last-child [aria-hidden=true]")?.innerText || ""
      const skills = Array.from(element.querySelectorAll("li.pvs-list__item--with-top-padding"))?.map(
        (e) => e.querySelector("[aria-hidden=true]").innerText
      )
      return {
        jobTitle,
        companyName,
        jobExperience,
        jobLocation,
        skills
      }
    }
    const entities = Array.from(document.querySelectorAll("#experience + * + * .pvs-entity") || [])
    const experience = entities?.map((el) => scrapeExperience(el))
    return experience ?? []
  },
  eduction: () => {
    const scrapeEducation = (element) => {
      const universityName = element.querySelector(".t-bold [aria-hidden=true]")?.innerText || ""
      const courseName = element.querySelector(".t-normal [aria-hidden=true]")?.innerText || ""
      const courseDuration = element.querySelector(".t-normal.t-black--light [aria-hidden=true]")?.innerText || ""
      return {
        universityName,
        courseName,
        courseDuration
      }
    }
    const entities = Array.from(document.querySelectorAll("#education + * + * .pvs-entity"))
    const education = entities?.map((el) => scrapeEducation(el))
    return education ?? []
  },
  skills: () => {
    const skills = []
    const entities = document.querySelectorAll("#skills + * + * .pvs-entity")
    entities.forEach((el) => {
      const skill = el.querySelector("span[aria-hidden=true]")?.innerText || ""
      skills.push({ skill })
    })
    return skills
  },
  interests: () => {
    const output = {
      companies: [],
      groups: [],
      schools: []
    }
    const interests = Array.from(document.querySelectorAll("#interests + * + * [role=tabpanel]"))
    interests.forEach((item, index) => {
      item.querySelectorAll("li.artdeco-list__item").forEach((el) => {
        const name = el.querySelector("span[aria-hidden=true]")?.innerText ?? ""
        output[Object.keys(output)[index]]?.push(name)
      })
    })
    return output ?? []
  },
  bio: async () => {
    return {
      fullName: document.querySelector("h1.v-align-middle").innerText,
      headline: document.querySelector(".text-body-medium").innerText,
      publicIdentifier: document
        .querySelector("#top-card-text-details-contact-info")
        .href.replace("overlay/contact-info/", "")
    }
  }
}

// // use
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

export function scrapeData() {
  const data = {}
  return new Promise(async (resolve) => {
    const value = await asyncForEach(Object.entries(linkedin_scrapper), async ([key, value]) => {
      data[key] = await value()
    })
    resolve(data)
  })
}
