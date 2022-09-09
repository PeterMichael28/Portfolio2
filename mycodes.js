const hamb = document.querySelector('.header .nav-bar .nav-list .hamb');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const mobile_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamb.addEventListener('click', () => {
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var s_p = window.scrollY;
    if (s_p > 250){
        header.style.backgroundColor ="dimgrey";
    } else {
        header.style.backgroundColor ="transparent"
    }
})
mobile_item.forEach(item=> {
    item.addEventListener('click', ()=>{
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    })
})