import "./menu.css"
import { makeContainer } from "./helpers.js"
export default function menu(){
    const MenuContentElement = document.querySelector("#content")
    MenuContentElement.classList.add("menu")
    const container = makeContainer()

    const mealCard = document.createElement("div")
    mealCard.classList.add("mealCard")
    
    const mealImage = document.createElement("div")
    mealImage.classList.add("mealImage")

    const mealText = document.createElement("div")
    mealText.classList.add("mealText")

    const mealName = document.createElement("h1")
    mealName.classList.add("mealName")

    const mealRating = document.createElement("div")
    mealRating.classList.add("mealRating")

    const mealRatingStarIcon = document.createElement("i")
    mealRatingStarIcon.className = "fa-solid fa-star"

    for(let i =0;i<5;i++){
            mealRating.appendChild(mealRatingStarIcon.cloneNode(1))
    }

    const mealRatingTotalNumber = document.createElement("span")
    mealRatingTotalNumber.classList.add("mealRatingTotalNumber")

    const mealDescription = document.createElement("p")
    mealDescription.classList.add("mealDescription")

    const mealPrice = document.createElement("div")
    mealPrice.classList.add("mealPrice")

    const mealOrderButton = document.createElement("button")
    mealOrderButton.classList.add("mealOrderButton")
    const addToCartIcon = document.createElement("i")
    addToCartIcon.className = "fa-solid fa-cart-shopping"
    mealOrderButton.appendChild(addToCartIcon)
    mealOrderButton.appendChild(document.createTextNode(" Order"))


    let animationDelay = 0;
    function appendMeal(){
        mealText.appendChild(mealName)
        
        mealRating.appendChild(mealRatingTotalNumber)
        mealText.appendChild(mealRating)
        mealText.appendChild(mealDescription)
        mealText.appendChild(mealPrice)
        mealText.appendChild(mealOrderButton)

        mealCard.appendChild(mealImage)
        mealCard.appendChild(mealText)
        const stars = mealRating.querySelectorAll("i").length - (5 - parseInt(mealRating.querySelector("span").textContent)) 
        mealRating.querySelectorAll("i").forEach((ele)=>{
            ele.classList.remove("bright")
        })
        for(let i=0; i<stars;i++){
            mealRating.querySelectorAll("i")[i].classList.add("bright")
        }
        mealCard.style.animationDuration = `${1000 + animationDelay}ms`

        animationDelay += 1000
        container.appendChild(mealCard.cloneNode(true))
      
    }
    // 1st Meal : Rancheros Platters
    mealImage.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROSvk3hMMhFkeMMQ1XpFI9FHRzsBqQTXQi0Q&s')"
    mealName.textContent = "Rancheros Platters"
    mealDescription.textContent = "The Rancheros Platter is a hearty breakfast staple featuring fried eggs served over lightly fried corn tortillas and smothered in a savory, spiced tomato-chili sauce."
    mealRatingTotalNumber.textContent = " 5"
    mealPrice.textContent= "35.5$"

    appendMeal()

    // 2nd Meal : American Platters
    mealImage.style.backgroundImage = "url('https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/fmxrljuk/d1d1c6d4-ce6f-499f-99c1-6e2e31a0113d.jpg')"
    mealName.textContent = "American Platters"
    mealDescription.textContent = "American platters are celebrated for their generous portions, typically centering on a hearty protein like fried chicken or meatloaf paired with classic comfort sides. These meals define the traditional diner experience."
    mealRatingTotalNumber.textContent = " 3"
    mealPrice.textContent= "45.5$"

    appendMeal()


    // 3rd Meal : New Mexico Breakfast Burritos
    mealImage.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy59Y5YUqyYbwi4obRmrNjzTYDr6H5ME0F0g&s')"
    mealName.textContent = "Mexico Burritos"
    mealDescription.textContent = "New Mexico breakfast burritos are distinguished by their use of authentic roasted green or red Hatch chilies, which provide a unique smoky heat to the filling of eggs, potatoes, and meat. Often served with both sauces."
    mealRatingTotalNumber.textContent = " 5"
    mealPrice.textContent= "68.5$"

    appendMeal()

    
    // 4th Meal : Pollos Burritos
    mealImage.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7W_U-OK1EYpQmRbC9_87tuOmr49Nf3eUcXw&s')"  
    mealName.textContent = "Pollos Burritos"
    mealDescription.textContent = "Pollos burritos are a fan favorite, featuring succulent, marinated grilled chicken wrapped tightly in a soft flour tortilla with savory fillings like beans, rice, and melted cheese. Often paired with a signature zesty salsa."
    mealRatingTotalNumber.textContent = " 4"
    mealPrice.textContent= "48.5$"

    appendMeal()
    
    MenuContentElement.appendChild(container)

}