const humMenu = document.querySelector('.burger-menu');
const main = document.querySelector('.maincontent');
const nav = document.querySelector('.wellcome-container__list');
const hide = document.querySelector('.hide-menu');
const popup = document.createElement('div');
const closedBtn = document.createElement('button');
const hedaer = document.querySelector('.header');
closedBtn.className = 'burgers-menu-closed';
popup.className = 'popup-menu';



humMenu.addEventListener('click', e => {
    const reqHeight = main.children[1].getBoundingClientRect().height;
    popup.style.height = reqHeight+'px';
    let op = 0.1;
    main.appendChild(popup);
    setTimeout (function foo(){
        if (op < 1) {
            op += 0.1;
            popup.style.opacity= op;
            setTimeout (foo, 50);
        }
    }, 50);
    setTimeout (function (){
        nav.classList.add('popup');
        hide.classList.add('popup');
        popup.appendChild(closedBtn);
        popup.appendChild(nav);
        nav.appendChild(hide);
    }, 500);
})

closedBtn.addEventListener('click', e => {
    let op = 1;
        setTimeout (function doo(){
            if (op > 0) {
                op -= 0.1;
                popup.style.opacity= op;
                setTimeout (doo, 50);
            }
        },50)
    setTimeout (function (){
        main.removeChild(popup);
        hide.classList.remove('popup');
        nav.classList.remove('popup');
    }, 1000);
})