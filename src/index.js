import "./style.css";
import home from "./tabs/home.js";
import menu from "./tabs/menu.js";
import about from "./tabs/about.js";
import logo from "./assets/images/Los_Pollos_Hermanos_logo.png"

home()
const navbar = document.querySelector("header nav")
const landingContentElement = document.querySelector("#content")
const logoImageElement = document.querySelector("header .logo")

logoImageElement.src = logo;
const tabFunctions ={
    "home" : home,
    "menu" : menu,
    "about" : about
}
document.body.addEventListener("click" , (e)=>{
    
    if(e.target.dataset.tabName){
        landingContentElement.textContent = '' // Emptying the content
    landingContentElement.className = ""
        tabFunctions[e.target.dataset.tabName]()
    }
})



export const message = "Foo"