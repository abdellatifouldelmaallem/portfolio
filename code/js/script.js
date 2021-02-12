const iconn = document.querySelector('.iconn');
const navgauche = document.querySelector('.nav-gauche');
const close = document.querySelector('.close');

iconn.addEventListener('click',()=>{
navgauche.classList.toggle('shownav');
});

close.addEventListener('click',()=>{
    navgauche.classList.toggle('shownav');
});



