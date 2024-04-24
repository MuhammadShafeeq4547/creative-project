let search_click = document.querySelector(".search_click")
let search_div = document.querySelector(".search_div")
let xmark = document.querySelector(".xmark")
let Btn_logout = document.querySelector(".Btn_logout")
let logout = document.querySelector(".logout")
let shop_click = document.querySelector(".shop_click")
let xmark_icon = document.querySelector(".xmark_icon")
let add_parent = document.querySelector(".add_parent")
let right_bar = document.querySelector(".right_bar")

search_click.addEventListener("click", function () {
    search_div.classList.toggle("none")
})
xmark.addEventListener("click", function () {
    search_div.classList.add("none")
})
Btn_logout.addEventListener("click", function () {
    logout.classList.remove("out")
    setTimeout(function () {
        location.href = "./Log out.html"
        logout.classList.add("out")
    }, 3000)
})

shop_click.addEventListener("click", function () {
    add_parent.classList.remove("none_dis")
    right_bar.classList.add("left1")
    right_bar.classList.remove("left2")
})
xmark_icon.addEventListener("click", function () {
    right_bar.classList.remove("left1")
    right_bar.classList.add("left2")
    add_parent.classList.add("none_dis")
})

let button_left = document.querySelector(".button_left")
let button_Right = document.querySelector(".button_Right")
let slides = document.querySelectorAll(".slide1")
let p_count = document.querySelector(".p_count")
let slides_parent1 = document.querySelector(".slides_parent")

let count = 0
let intr = setInterval(Clear_Function, 1500)

function Clear_Function() {
    count++
    if (count > 5) {
        count = 0
    }
    slides_parent1.style.left = `-${count * 100}%`
    p_count.innerHTML = `${count + 1} / 6`
}

button_left.addEventListener("click", function () {
    count--
    if (count < 0) {
        count = slides.length - 1
    }
    clearInterval(intr)
    intr = setInterval(Clear_Function, 1500)
    slides_parent1.style.left = `-${count * 100}%`
    p_count.innerHTML = `${count + 1} / 6`
})

button_Right.addEventListener("click", function () {
    count++
    if (count > slides.length - 1) {
        count = 0
    }
    clearInterval(intr)
    intr = setInterval(Clear_Function, 1500)
    p_count.innerHTML = `${count + 1} / 6`
    slides_parent1.style.left = `-${count * 100}%`
})

let p_1 = document.querySelectorAll(".p_1")

for (let i = 0; i < p_1.length; i++) {
    p_1[i].addEventListener("click", function () {
        for (let s = 0; s < p_1.length; s++) {
            p_1[s].classList.remove("col")
        }
        p_1[i].classList.add("col")
    })
}


let obj = [
    {
        name: "Brand shoes for men",
        source: "./images/single-product-item1.jpg",
        price: 99,
        number1: 1,
    },
    {
        name: "Brand shoes for men",
        source: "./images/post-item2.jpg",
        price: 99,
        number1: 2,
    },
    {
        name: "Brand shoes for men",
        source: "./images/post-item3.jpg",
        price: 99,
        number1: 3,
    },
    {
        name: "Running shoes for men",
        source: "./images/post-item4.jpg",
        price: 90,
        number1: 4,
    },
    {
        name: "Running shoes for men",
        source: "./images/post-item5.jpg",
        price: 90,
        number1: 5,
    },
    {
        name: "Sports shoes for men",
        source: "./images/post-item6.jpg",
        price: 90,
        number1: 6,
    },
    {
        name: "Running shoes for men",
        source: "./images/post-item7.jpg",
        price: 80,
        number1: 7,

    },
    {
        name: "Running shoes for men",
        source: "./images/post-item1.jpg",
        price: 80,
        number1: 8,
    },
    {
        name: "Sports shoes for men",
        source: "./images/card-item4.jpg",
        price: 80,
        number1: 9,
    },
]



let parent_Cart = document.querySelector(".parent_Cart")

p_1.forEach((ele) => {
    ele.addEventListener("click", function () {
        let FilterValue;
        if (ele.innerHTML == "View All") {
            parent_Cart.innerHTML = ""
            FilterValue = obj.filter((elem, indxx) => indxx < 9)
        }
        if (ele.innerHTML == "10% Off") {
            parent_Cart.innerHTML = ""
            FilterValue = obj.filter((elem, indxx) => indxx > 2 && indxx < 6)
        }
        if (ele.innerHTML == "20% Off") {
            parent_Cart.innerHTML = ""
            FilterValue = obj.filter((elem, indxx) => indxx > 5)
        }
        Render(FilterValue)
        show_carts()
        cart_add()
    })
})

Render()
function Render(getValue) {
    if (getValue) {
        getValue.map((ele, index) => {


            parent_Cart.innerHTML += `
    <div class="cart1 animm">
                    <div class="icon_div">
                    <i class="fa-regular fa-eye heart"></i>
                    </div>
                    <div class="icon_div2">
                    <i class="fa-regular fa-heart heart"></i>
                    </div>
                    <div class="img_cart">
                        <img src="${ele.source}" alt="" style="width: 100%; height: 100%;">
                    </div>
                    <div class="child_Cart">
                        <p class="p_name">${ele.name}</p>
                        <p class="p_price">Price: ${ele.price}</p>
                        <button class="btn_add" onclick="Update(${ele.number1})">Add To Cart</button>
                    </div>
                </div>
              
    `
        })
    }
    else {
        obj.map((ele, index) => {

            parent_Cart.innerHTML += `
        <div class="cart1 animm">
        <div class="icon_div">
        <i class="fa-regular fa-eye heart"></i>
        </div>
        <div class="icon_div2">
        <i class="fa-regular fa-heart heart"></i>
        </div>
        <div class="img_cart">
        <img src="${ele.source}" alt="" style="width: 100%; height: 100%;">
        </div>
        <div class="child_Cart">
        <p class="p_name">${ele.name}</p>
        <p class="p_price"> Price: $${ele.price}</p>
        <button class="btn_add" onclick="Update(${ele.number1})">Add To Cart</button>
        </div>
        </div>
        
        `
        })
    }
}




let parent_divs = document.querySelector(".parent_divs");
let p_counting = document.querySelector(".p_counting");
let create_Parent = document.querySelector(".create_Parent");
let parent_p = document.querySelector(".parent_p");
let count1 = document.querySelector(".count");
let p_total = document.querySelector(".p_total");

let Arr2 = []
function Update(Get_number1, action) {
    let obj2 = obj.find(elem => elem.number1 === Get_number1);
    if (obj2) {
        let cartItem = Arr2.find(ele => ele.number1 === obj2.number1);

        if (cartItem) {
            if (action === 'increment') {
                cartItem.quantity++;
                cartItem.totalprice += obj2.price;
            } else if (action === 'decrement') {
                if (cartItem.quantity > 1) {
                    cartItem.quantity--;
                    cartItem.totalprice -= obj2.price;
                }
            }
            Display();
        } else {
            Arr2.push({
                ...obj2,
                quantity: 1,
                totalprice: obj2.price
            });
            Display();
        }
    }
}


function Display(get1) {
    let image_js = document.querySelector(".image_js")
    document.querySelector(".create_Parent").innerHTML = ""
    Arr2.forEach((ele, index) => {
        let Create = document.createElement("div")
        Create.classList.add("Create")

        Create.innerHTML = `<img class="img_create" src="${ele.source}" alt="">
        <p class="js_p">${ele.name} <br> 
        Quantity: 
        <button class="decrementBtn" onclick="Update(${ele.number1}, 'decrement')">-</button> 
        <span class="quantity">${ele.quantity}</span>
        <button class="incrementBtn" onclick="Update(${ele.number1}, 'increment')">+</button> </br>
        <span class="mt_span">- Total Price: $${ele.totalprice}</span>
        </p>
        <i class="fa-solid fa-xmark Right_0" onclick="removeElement(${index})"></i>
        `;
        document.querySelector(".create_Parent").appendChild(Create)
    })
    p_counting.innerHTML = Arr2.length >= 0 ? Arr2.length : 0;
    count1.innerHTML = Arr2.length >= 0 ? Arr2.length : 0; 
}

function removeElement(index) {
    console.log(Arr2);
    Arr2.splice(index, 1);
    count1.innerHTML = Arr2.length >= 0 ? Arr2.length : 0;
    Display();
}



show_carts()
function show_carts() {
    let icon_div = document.querySelectorAll(".icon_div")
    let show_cart = document.querySelector(".show_cart")
    let x_mark = document.querySelector(".x_mark")
    let image = document.querySelector(".image")
    let p_text = document.querySelector(".p_text")
    icon_div.forEach((ele) => {
        ele.addEventListener("click", function () {
            show_cart.classList.remove("hide")
            let sources = this.parentElement.childNodes[5].childNodes[1].src;
            image.src = sources
            console.log(sources);
            let Text = this.parentElement.childNodes[5].childNodes[1].innerHTML
            p_text.innerHTML = Text
        })
    })
    x_mark.addEventListener("click", function () {
        show_cart.classList.add("hide")
    })
}




let favrt_heart = document.querySelector(".favrt_heart")
let favourite_div = document.querySelector(".favourite_div")
let cross = document.querySelector(".cross_div")


favrt_heart.addEventListener("click", function () {
    favourite_div.classList.remove("none_fav")
})
cross.addEventListener("click", function () {
    favourite_div.classList.add("none_fav")
})


cart_add()
function cart_add() {
    let icon_div2 = document.querySelectorAll(".icon_div2");
    let parent_check = document.querySelector(".parent_check");
    let count2 = document.querySelector(".count2");
    let overlay = document.getElementById("overlay"); 

    icon_div2.forEach((ele, index) => {
        ele.addEventListener("click", function () {
            let sources2 = this.parentElement.childNodes[5].childNodes[1].src;
            let name2 = this.parentElement.childNodes[7].childNodes[1].innerHTML;
            let price_get = this.parentElement.childNodes[7].childNodes[3].innerHTML;
            let quantityElement = this.parentElement.querySelector(".quantity");
            let quantity = quantityElement ? parseInt(quantityElement.textContent) : 0;

            if (!ele.classList.contains("add")) {
                ele.classList.add("add");
                let parent_div = document.createElement("div");
                let img_js = document.createElement("img");
                let p_js = document.createElement("p");
                let p2_js = document.createElement("p");
                let parent_js = document.createElement("div");
                let Xmark = document.createElement("i");
               
                parent_div.classList.add("parent_div");
                parent_check.appendChild(parent_div);

                img_js.src = sources2;
                img_js.classList.add("img_js");
                parent_div.appendChild(img_js);

                parent_js.classList.add("parent_js");
                parent_div.appendChild(parent_js);

                p_js.innerHTML = name2;
                parent_js.appendChild(p_js);

                p2_js.innerHTML = price_get;
                parent_js.appendChild(p2_js);

                Xmark.classList.add("fa-solid", "fa-xmark", "Xmark");
                parent_div.appendChild(Xmark);

                Xmark.addEventListener("click", function () {
                    this.parentElement.remove();
                    ele.classList.remove("add");
                    updateCount2(); 
                });

                updateCount2(); 
                showOverlay();           }
        });
    });

    function updateCount2() {
        count2.innerHTML = document.querySelectorAll(".parent_div").length;
    }

    function showOverlay() {
        overlay.style.display = "block"; 
        setTimeout(function () {
            overlay.style.display = "none"; 
        }, 2000);
    }
}


let cross_div2 = document.querySelector(".cross_div3")
let icrement_parent = document.querySelector(".icrement_parent")
cross_div2.addEventListener("click",function(){
    icrement_parent.classList.add("none1")
}) 