import "./style.css";
import home from "./tabs/home.js";
import menu from "./tabs/menu.js";
import about from "./tabs/about.js";
import logo from "./assets/images/Los_Pollos_Hermanos_logo.png"
import placeImage from "./assets/images/LosPollosHermanosIRL.jpg"
home()
const navbar = document.querySelector("header nav")
const contentElement = document.querySelector("#content")
const logoImageElement = document.querySelector("header .logo")
logoImageElement.src = logo;
logoImageElement.setAttribute("rel", "preload")

const placeImageElement = document.querySelector('footer img.placeImage')
placeImageElement.src = placeImage

const tabFunctions = {
    "home": home,
    "menu": menu,
    "about": about
}
document.body.addEventListener("click", (e) => {

    if (e.target.dataset.tabName) {
        contentElement.textContent = '' // Emptying the content
        contentElement.className = ""
        tabFunctions[e.target.dataset.tabName]()
    }
})





export const message = "Foo"