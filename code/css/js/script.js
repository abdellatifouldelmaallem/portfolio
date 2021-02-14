const iconn = document.querySelector('.borgar');
const navgauche = document.querySelector('.navigation');
const close = document.querySelector('.close');



iconn.addEventListener('click',()=>{
    navgauche.classList.toggle('shownav');
    });
    
    close.addEventListener('click',()=>{
        navgauche.classList.toggle('shownav');
    });
    