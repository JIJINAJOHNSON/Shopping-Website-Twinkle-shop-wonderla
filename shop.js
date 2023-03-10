//Mobile 

const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".menu-list");

mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");

})

// close menu list

mobileLink.addEventListener("click",function(){
    const  menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars){
        mobile.classList.toggle(".is-active");
        mobileLink.classList.remove("active");

    }
})



// swiper

const swiper = new Swiper(".myswiper",{
    spaceBetween:30,
    centeredslides:true,
    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
});
  

const elem = document.querySelector(".product-wrapper");
const iso = new Isotope (elem,{
    ItemSelector:".product-card",
    layoutMode:"fitRows",
});
const filterElem = document.querySelector("#filter");
filterElem.addEventListener("click",function(event){
    if(!matchesSelector(event.target,"button")){
        return;
    }
    var filterValue = event.target.getAttribute("data-filter");
    iso.arrange({filter:filterValue});
});

// change is-checked class on buttons

const buttonGroups = document.querySelector(".filter-group");
for(var i = 0, len = buttonGroups.length; i<len;i++){
    var buttonGroup=buttonGroups[i];
    radioButtonGroup(buttonGroup);
}
function radioButtonGroup(buttonGroup){
    buttonGroups.addEventListener("click",function(event){
        if(!matchesSelector(event.target,"button")){
            return;
        }
        buttonGroup.querySelector(".is-checked").classList.remove(".is-checked");
        event.target.classList.add(".is-checked");

    });
}