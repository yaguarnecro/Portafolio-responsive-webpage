//Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItem = document.querySelectorAll('.nav-item');
//pero con los nav-item, al ser varios, se usa query.selector.all.
//que entrega un node list (algo asi como un array)

//set Initial State Of menu
let showMenu = false;
//estado inicial del menu, cerrado abierto, false, true


menuBtn.addEventListener('click', toggleMenu);
//EventListener, para cuando demos click
//se activa la función toggleMenu.
function toggleMenu() {
    if (!showMenu) { //si esta cerrado, false
        menuBtn.classList.add('close'); //se agrega clase
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItem.forEach(item => item.classList.add('show'));
        //primero se hace un loop y se agrega la clase a cada item.
        //Set Menu State
        showMenu = true; //se resetea el estado abierto,true
    } else { //aqui es lo contrario a lo anterior 
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItem.forEach(item => item.classList.remove('show'));
        //Set Menu State
        showMenu = false; //vuelve a falso
    }
}