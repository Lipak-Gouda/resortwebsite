

 const Mobile_menu = document.getElementById('mobile-menu').addEventListener("click", menu_Open);
const menu_list = document.getElementById('ul-list');
 const Mobile_menu_close = document.getElementById('mobile-close').addEventListener("click", menu_Close);

function menu_Open(){
    menu_list.classList.add("a");
}

function menu_Close(){
    menu_list.remove("a");
}


const Open = document.getElementById('open');
const Close = document.getElementById('close');
const PopupContainer = document.getElementById('ppp')

 Open.addEventListener('click', () =>{
    PopupContainer.classList.add('active');
 })

Close.addEventListener('click', () => {
    PopupContainer.classList.remove('active');
})
  






 