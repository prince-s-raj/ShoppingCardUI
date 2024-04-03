
let shoppingItems = document.getElementById("items")

let shopItemsData = [
    {
        itemId: "1001",
        itemName: "Noodles",
        code: "#34875",
        price: 52.5,
        image: "images/food1.jpg"
    }, 
    {
        itemId: "1002",
        itemName: "Fish rice",
        code: "#97879",
        price: 78.12,
        image: "images/food2.jpeg"
    }, 
    {
        itemId: "1003",
        itemName: "Chicken",
        code: "#32452",
        price: 220,
        image: "images/food3.jpg"
    },
    {
        itemId: "1004",
        itemName: "Fruite salate",
        code: "#56577",
        price: 44,
        image: "images/food4.webp"
    },
    {
        itemId: "1005",
        itemName: "Eage vege",
        code: "#63747",
        price: 23.4,
        image: "images/food5.jpg"
    }
];

let generateItem = () =>{
    return(shoppingItems.innerHTML = shopItemsData.map((item) => {
        return `
        <div class="item" id="item-id-${item.itemId}">
            <img src="${item.image}" class="product-img">
            <div class="item-detail">
                <p class="item-title">${item.itemName}</p>
                <p class="item-code">${item.code}</p>
            </div>
            <div class="quantity-control">
                <img src="images/minus.png" class="minus-btn" onclick="decrementQuantity(${item.itemId});">
                <div class="quantity" id="${item.itemId}">1</div>
                <img src="images/plus.png" class="plus-btn" onclick="incrementQuantity(${item.itemId});">
            </div>
            <p class="price" id = "${item.itemId}-price">$ ${item.price}</p>
            <img src="images/x-button.png" width="15" class="close-btn" onclick="closeButton(${item.itemId})">
        </div> 
        `;
    }).join(""));
};

generateItem();
updateCard();
setInterval(updateprice(),0.1000)


var decrementQuantity =(id) =>{
    const quantity = document.getElementById(id);
    quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
};

var incrementQuantity =(id) =>{
    let quantity = document.getElementById(id)
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1;

    // For increase price
// ! for increase price 
        let itemIdPrice = id+"-price";
        let price = document.getElementById(itemIdPrice);
    
        var currentPrice = parseFloat(price.innerHTML.slice(2,price.innerHTML.length))
    
        var numberOfQuantity = parseInt(quantity.innerHTML)
        
        var sum =  currentPrice *numberOfQuantity; 
        console.log(sum);
        price.innerHTML = sum;
        
};


var closeButton = (id) => {

    var currentItem = "item-id-"+id;
    const currentItemCard = document.getElementById(currentItem);
    currentItemCard.remove()
}

function updateCard(){
    const holderName = document.querySelector(".holder-name")
    const cardNumber = document.querySelector(".card-number");
    const expDate = document.querySelector(".exp-date");

    const nameInput = document.querySelector("#name-input")
    const numberInput = document.querySelector("#number-input");
    const dateInput = document.querySelector("#date-input");

    setInterval(() => {
        holderName.innerHTML = nameInput.value;
        cardNumber.innerHTML = numberInput.value;
        expDate.innerHTML = dateInput.value
        
    }, 0.1000);
}



function updateprice(){
    const price = document.querySelectorAll(".price");
    const totalPrice = document.querySelector(".total-price")

    var currentPrice = 0;
    price.forEach((pz) =>{
        currentPrice = currentPrice + parseFloat(pz.innerHTML.slice(2,pz.innerHTML.length))
        return currentPrice
    })
    totalPrice.innerHTML = `$ ${currentPrice}`
}
