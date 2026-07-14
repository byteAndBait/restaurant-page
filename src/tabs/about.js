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
    founderName.textContent = "Founder:Gustavo Fring"

    const founderDescription = document.createElement("p")
    founderDescription.classList.add("founderDecription")
    founderDescription.textContent = "Gustavo Fring established Los Pollos Hermanos as a premier fast-food chain specializing in acclaimed Acapulco-style chicken, building the brand from a single location into a beloved regional powerhouse. While he is celebrated as a pillar of the community and a meticulous business leader, his expansive logistical network serves as a highly efficient **conduit** for interests far beyond the culinary world."
    function makeLink(brandIconName,href)
    {
        const linkElement = document.createElement("a")
        const iconElement = document.createElement("i")
        iconElement.className = `fa-brands fa-${brandIconName}`;
        linkElement.href = href
        linkElement.append(iconElement);
        return linkElement
    }
    const socialLinks = document.createElement("div");
    socialLinks.classList.add("socialLinks");
    const facebookLink = makeLink("facebook","https://www.facebook.com/OfficialGiancarloEsposito/")
    const instagramLink = makeLink("instagram","https://www.instagram.com/thegiancarloesposito/")
    const twitterLink = makeLink("x-twitter","https://x.com/quiethandfilms")
    socialLinks.append(facebookLink,instagramLink,twitterLink)

    founderText.append(founderName,founderDescription,socialLinks)

    container.append(founderImage,founderText)

    contentElement.appendChild(container)
}

