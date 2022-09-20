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
        header.style.backgroundImage ="linear-gradient(60deg, #29323c 0%, #485563 100%)";
    } else {
        header.style.backgroundImage ="none"
    }
})
mobile_item.forEach(item=> {
    item.addEventListener('click', ()=>{
    hamb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    })
})

function reveal() {
 var reveals = document.querySelectorAll(".reveal");

 for (var i = 0; i < reveals.length; i++) {
  var windowHeight = window.innerHeight;
  var elementTop = reveals[i].getBoundingClientRect().top;
  var elementVisible = 200;

  if (elementTop < windowHeight - elementVisible) {
   reveals[i].classList.add("active");
  } else {
   reveals[i].classList.remove("active");
  }
 }
}

window.addEventListener("scroll", reveal);
