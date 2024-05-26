let button_1 = document.getElementById("button_1");
let button_2 = document.getElementById("button_2");
let button_3 = document.getElementById("button_3");
let imging = document.getElementById("imging");
let tour_3 = document.getElementById("tour");
let cost_3 = document.getElementById("cost");
let unlist = document.getElementById("unlist");
let total_pay = document.getElementById("total_pay");
let total_pay_1 = 0;


let cart = []
let k = 0;
let c = 0;

function addCartItemToDOM(index) {
    let list = document.createElement("li");
    list.classList.add("list-item");
    list.innerHTML = `
        <div class="d-flex flex-column justify-container-center form">
            <img src="${cart[index].img_1}" />
            <p>${cart[index].tour_1}</p>
            <p>${cart[index].cost_1}</p>
            <button onclick="removeFromCart(${index})" class="btn btn-secondary">${"Delete"}</button>
        </div>
    `;
    unlist.appendChild(list);
}

function removeFromCart(index) {
    total_pay_1 -= parseInt(cart[index].cost_1);
    cart.splice(index, 1);
    total_pay.textContent = total_pay_1 + ".0";
    unlist.innerHTML = "";
    for (let i = 0; i < cart.length; i++) {
        addCartItemToDOM(i);
    }
}



function addToCart(img, tour, cost) {
    let cart_1 = {
        img_1: img,
        tour_1: tour,
        cost_1: cost
    };
    cart.push(cart_1);
    addCartItemToDOM(cart.length - 1);

    total_pay_1 += parseInt(cost);
    total_pay.textContent = total_pay_1 + ".0";
}

button_1.addEventListener('click', function() {
    let img = "https://img.freepik.com/premium-photo/mosque-with-blue-mosque-background_954226-101688.jpg?w=300";
    addToCart(img, "Taj Mahal", 3299);
});

button_2.addEventListener('click', function() {
    let img = "https://img.freepik.com/free-photo/big-ben-houses-parliament-london-uk_268835-1400.jpg?w=300&t=st=1703003486~exp=1703004086~hmac=655dcfee7abd0aad27ad4fc45a7abf6e42ecfb16fad658c7ef9659500832b0ce";
    addToCart(img, "London", 3299);
});

button_3.addEventListener('click', function() {
    let img = "https://img.freepik.com/premium-photo/eiffel-tower-paris-cityscape-summer-sunny-day-france_257123-3962.jpg";
    addToCart(img, "Paris", 3299);
})