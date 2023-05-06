$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})

let collectionItem = document.querySelector(".collection-item");
let collectBtn = document.querySelector(".collect-Btn")

collectBtn.addEventListener('click',function (e) {
    e.preventDefault();
    collectionItem.classList.toggle("d-block");
    
})

let moments = document.querySelector('.moments-item');
let momentsBtn = document.querySelector('.moments-btn');

momentsBtn.addEventListener('click',function(e){
    e.preventDefault();
    moments.classList.toggle("d-block")
})

$(document).ready(function(){      

    $(".search-btn").click(function (event) {
        event.preventDefault();
        $(".search").slideDown();
    })
    
    $(".search-close").click(function (event) {
        event.preventDefault();
        $(".search").slideUp();
      })
    $(".shopping-cart-btn").click(function (event) {
        event.preventDefault();
        $(".shopping-cart-list").toggle();
      })
    $(".hamburger-btn").click(function (event) {
        event.preventDefault();
        $('.responsive-hamburger-page').animate({width:'toggle'},350);
    })
    $(".closed").click(function (event) {
        event.preventDefault();
        $(".responsive-hamburger-page").toggle("d-none")
      })
    $(".res-collect-Btn").click(function (e) {
        e.preventDefault();
        $(".res-collection-item").toggle(500)
      })
    $(".res-moments-btn").click(function (e) { 
        e.preventDefault();
        $(".res-moments-item").toggle(500);
     })
     $(".contact-btn").click(function (e) { 
        e.preventDefault();
        $(".contact-us").toggle(500)
      })
      $(".support-btn").click(function (e) { 
        e.preventDefault();
        $(".support").toggle(500)
      })
      $(".company-btn").click(function (e) { 
        e.preventDefault();
        $(".company").toggle(500)
      })
})


let cardItem = document.querySelectorAll(".card-item")
let cardBtn = document.querySelectorAll(".btn")
let shoppingCartBtn = document.querySelector(".shopping-cart-btn")
let shoppingCartList = document.querySelector(".shopping-cart-list")

class Shopping{
    constructor(image,title,price){
        this.image = image;
        this.title = title;
        this.price = price;
    }
}

class UI{
    addToCart(shopping){
        const listItem = document.createElement("div");
        listItem.classList = "list-item";
        listItem.innerHTML = 
        `
        <div class="row align-items-center">
        <div class="col-md-3 mt-3">
          <img src="${shopping.image}" alt="" class="img-fluid">
        </div>
        <div class="col-md-5">
          <div class="title">
           ${shopping.title}
          </div>
        </div>
        <div class="col-md-2">
          <div class="price">${shopping.price}</div>
        </div>
        <div class="col-md-2">
        <a class="remove-btn" href=""><i class="fa-regular fa-trash-can"></i></a>
        </div>
      </div>
        `
        shoppingCartList.appendChild(listItem);
    }

    removeCart(){
        let removeBtn = document.querySelectorAll(".remove-btn");
        let self = this;
        for (let i = 0; i < removeBtn.length; i++) {
            removeBtn[i].addEventListener('click',function (e) {
                e.preventDefault();
                this.parentElement.parentElement.parentElement.remove();
                self.cartCount();
              })
            
        }
    }
    cartCount(){
        let listItem = document.querySelectorAll(".list-item");
        let itemCount = document.querySelector(".shopping-count")
        itemCount.innerHTML = listItem.length;
    }
}
for (let i = 0; i < cardItem.length; i++) {
    cardBtn[i].addEventListener('click',function (e) {
        let image = cardItem[i].querySelectorAll(".image")[0].src;
        let title = cardItem[i].querySelectorAll(".card-title")[0].textContent;
        let price = cardItem[i].querySelectorAll(".card-price")[0].textContent;

        let shopping = new Shopping(image,title,price);
        let ui = new UI()
        ui.addToCart(shopping);
        ui.removeCart();
        ui.cartCount();
        e.preventDefault();
        
        
      })
    
}

