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