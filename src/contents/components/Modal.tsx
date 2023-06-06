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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUMZMX///8AYcQAWcFDf8nL3PIAWrzQ3vMAYcI0eclZjtAucslAgsz6/v3x9/sgbclOhM8AX8QAYsAAX70AV70AWMLm7vgAXb4sdsw5fsoRbsVmltK6z+iUt+AMZcGDrN3c6fNvnddiltWqwuPA0+r0+vyOrt+lweR9pduuyueUst9Lh81pldd1mtYdbcunxOXO4u7Z4fGRyVlRAAAEKUlEQVR4nO3ce1faMBzG8SblEpSCiUUuQrkMhsCc+v7f3Ko4KjW/yLY0WXOez9mf4Ml3vSW1NYoAAAAAAAAAAAAAAAAAAAAAAAAAAADgYiriIsqU72FURcapGnXHk5aMue+xVCCT6n56x960Z2OpMt8jsozz+Xve0Xqc+h6SXbKzYOeSfex7UBap+J591lThHI3awPxw5KGcVFUj0RayaRrI6UaUj8GTpfA9NivknApkvTC2YdwjC9lc+h6dBWpFB7JFCIXx1FDIRr6HZ0Fq2EkZewjgXNMnLhVH34a+x/fPeMdYOK3/gchvTIFsXf/ZKR+bC+u/DcW1cS/d1f84jFobU+H3ANYXadNU2PU9PAvkd0Ngz/forMgMhU/1P5Xm4h0ZmHQCOAzz68WEPNdsg9iE+ZH4QATeBTApPYqf9PvoKIh99E2qOxQ3jVvf47JHDT5fMl5GAQW+3tNvnF/4N3shwrhJc8Ljw/Q0Q13MJ4GcRc8IORjP99vZfpWlQe2gH3EZx7Gs/4IJAADqQ3DJX/+FM38vqHyKlA5Hhx+Pj49X43468P34CheEiz9Z+pTMlrvFaQ6YbNrblRpKf6vNbHRNKX2yT/kwSVd5XluzGGs//Ew9NfIGS/RYs3X2yUGzp7dpnMYu+zPql1mbp46f+XxeSCkVxrpt8+bmWJgJOTPeYP7m5QkWi4Wye0d94t3m3sNmtFao5OyLvle7zPnRaKlQCb6+IDBfXvddJ1oq5BH5WE7JXd/xwWilUKnJpYGM9a7dPk5mpfCWP18cmO+okdOtaKVwYHxm5ZP1wOWNPBuFneUfBTK2dHkzyEbhwfirco3NxOF+aqPw8rPMbzuHV34bhX+h4e6q6KnQ4ZM6ngrZyNlG9FXo7hfMvgp7zt7o8FXIDq52U2+FznbTKgovmgAsalq4mB0mQqjJYfvler98o6sWhevuYPh2C5jz4WD1ReMPR4soi4W91dmtXy7MK469o7mpvcLn8nRaSWPi9PzH/++FCXvW3LuXpoXxi6MllK1tqHtGLBMd0zccLYNtFR60W8T0wkqv7yTQVuGTfpfLuvRXkms3sxo7hQlx/yy7NayOO3Uq3MXExY148PFY6OZyYafwihqsXNJfGteoMCGXQoYfzxo1KmxSO2kkJvTLcXUq3BreraFnp3UqNLwT3aJPpnUqPNBjTV+CKDScFVv0t+pUaLiytegXq1BoCQoLKNRDYfVQWEChHgqrh8ICCvVQWD0UFlCoh8LqobCAQj0UVg+FBRTqobB6KCygUA+F1UNhAYV6KKweCgso1ENh9VBYQKEeCquHwkKAhe1SIf2UoaFwSP+/dB29FtTvUsbnH+Q3VxTDmxOq+zffskqJiOtFpZda+OV/M6uQKepLof0NWAAAAAAAAAAAAAAAAAAAAAAAAAAAgAr8Aj5RWY0PDbn2AAAAAElFTkSuQmCC"
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
