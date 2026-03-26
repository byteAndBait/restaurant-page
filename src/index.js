import home from "./tabs/home.js";
import menu from "./tabs/menu.js";
import about from "./tabs/about.js";
home()
const navbar = document.querySelector("header nav")
const landingContentElement = document.getElementById("content")
const tabFunctions ={
    "home" : home,
    "menu" : menu,
    "about" : about
}
navbar.addEventListener("click" , (e)=>{
    landingContentElement.textContent = '' // Emptying the content 
    if(e.target.dataset.tabName){
        tabFunctions[e.target.dataset.tabName]()
    }
})