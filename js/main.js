let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('today');
selectElement.innerHTML = formatDate;

let foodCart = [];
let foodCartNumHTML = document.getElementById("btn-length");

function changeActive() {
    let allNavItems = document.getElementsByClassName("nav-link");
    let length = allNavItems.length;
    for (i = 0; i < length; i++) {
        
        allNavItems[i].addEventListener('click', function()  {
            let current = document.getElementsByClassName(" active")
        if (current.length >= 1) {
            current[0].className = current[0].className.replace(" active", "")
        }
        
        this.className += " active";
            }
        )
    }
   
}

function addToFoodCart(foodItemId) {
    foodCart.push(foodItemId);
    foodCartLength = foodCart.length
    foodCartNumHTML.innerHTML = foodCartLength;
}

function showFoodCart() {
    alert(foodCart)
}