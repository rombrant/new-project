const links = document.querySelectorAll('.wellcome-container__item');
const hide = document.querySelector('.hide-menu');
const items = document.querySelectorAll('.hide-menu__item');
const height = hide.firstElementChild.getBoundingClientRect().height;




for (const link of links) {
    link.addEventListener('click', e => {
        e.preventDefault;
        const index = [].indexOf.call(links, event.currentTarget) + 1;
        const curItem = e.currentTarget;
        if ((index===links.length) && (!curItem.classList.contains('active'))) {
            const indexItems = items.length;
            reqHeight = height * indexItems;
            hide.style.height= reqHeight + 'px';
            curItem.classList.add('active');
            
        }
        else if ((index===links.length) && (curItem.classList.contains('active')))  {
            hide.style.height = 0;
            curItem.classList.remove('active');
        }
    })
}


for (const item of items) {
    item.addEventListener('click', e => {
        removeActiveClass(links);
    })
}
function removeActiveClass(links) {
    Array.from(links).forEach(e => {
        if (e.classList.contains('active')) {
            e.classList.remove('active');
            hide.style.height = 0;
        }
    });
}
