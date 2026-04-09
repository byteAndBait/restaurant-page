import landingImageSrc from "../assets/images/LosPollosHermanosLandingImage.png";
import "./home.css"

// Helpers
import { makeContainer } from "./helpers.js";




export default function home() {
    const contentElement = document.querySelector("#content")
    contentElement.classList.add("home")
    const container = makeContainer()

    const landingImage = document.createElement("img")
    landingImage.className = "landingImg"
    landingImage.src = landingImageSrc;
    const landingText = document.createElement("div")
    landingText.className = "text"

    const landingTextTitle = document.createElement("h1")
    landingTextTitle.textContent = "We serve our customers "
    const textSpan = document.createElement("span")
    textSpan.textContent = "Exceptional "
    landingTextTitle.appendChild(textSpan)
    landingTextTitle.appendChild(document.createTextNode(" food"))
    const landingTextDescription = document.createElement("p")
    landingTextDescription.textContent = "Hello! And welcome to the Los Pollos Hermanos family!"

    landingText.appendChild(landingTextTitle)
    landingText.appendChild(landingTextDescription)

    container.appendChild(landingImage)
    container.appendChild(landingText)

    contentElement.appendChild(container)
}
