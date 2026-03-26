import landingImageSrc from "../assets/images/landing.png";

export default function home(){
const landingContentElement = document.querySelector("#content")

const landingImage = document.createElement("img")
landingImage.src = landingImageSrc;

const landingText = document.createElement("div")
landingText.className = "text"

const landingTextTitle = document.createElement("h1")
landingTextTitle.textContent = "We serve our customer EXCEPTIONAL food"
const landingTextDescription = document.createElement("p")
landingTextDescription.textContent = "Hello! And welcome to the Los Pollos Hermanos family!"

landingText.appendChild(landingTextTitle)
landingText.appendChild(landingTextDescription)

landingContentElement.appendChild(landingImage)
landingContentElement.appendChild(landingText)
}
