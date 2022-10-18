

 const Mobile_menu = document.getElementById('mobile-menu').addEventListener("click", menu_Open);
const menu_list = document.getElementById('ul-list');
 const Mobile_menu_close = document.getElementById('mobile-close').addEventListener("click", menu_Close);

function menu_Open(){
    menu_list.classList.add("a");
}

function menu_Close(){
    menu_list.remove("a");
}

 //  Responsive Menu 
let Header =  document.getElementById("bag-icon").addEventListener("click", open_cart);
let cart = document.getElementById('cart-open');
let cartClose = document.getElementById('cart-close').addEventListener("click", close_cart) 


function   open_cart(){
    document.getElementById('cart-open').classList.add("active");
     
} 
function close_cart(){
      
    document.getElementById('cart-open').classList.remove("active")
} 
 