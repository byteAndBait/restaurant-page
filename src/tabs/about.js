import { makeContainer } from "./helpers.js";
import founder from "../assets/images/gustavo.jpg"
import "./about.css"
export default function about() {
    const contentElement = document.querySelector("#content")
    contentElement.classList.add("about")
    const container = makeContainer()

    const founderImage = document.createElement("img")
    founderImage.classList.add("founderImage")
    founderImage.src = founder

    const founderText = document.createElement("div")
    founderText.classList.add("founderText")

    const founderName = document.createElement("h1")
    founderName.classList.add("founderName")
    founderName.textContent = "Founder: Gustavo Fring"

    const founderDescription = document.createElement("p")
    founderDescription.classList.add("founderDecription")
    founderDescription.textContent = "Gustavo Fring established Los Pollos Hermanos as a premier fast-food chain specializing in acclaimed Acapulco-style chicken, building the brand from a single location into a beloved regional powerhouse. While he is celebrated as a pillar of the community and a meticulous business leader, his expansive logistical network serves as a highly efficient **conduit** for interests far beyond the culinary world."

    founderText.appendChild(founderName)
    founderText.appendChild(founderDescription)

    container.appendChild(founderImage)
    container.appendChild(founderText)

    contentElement.appendChild(container)
}
