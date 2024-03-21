





const navBar = document.getElementsByTagName("header")[0]; // Get the first navigation element
let previousScrollY = 0; // Initialize previous scroll position

AOS.init();

window.addEventListener("scroll", function() {
  const currentScrollY = window.pageYOffset;

  if (currentScrollY > previousScrollY) { // Scrolling down
    navBar.style.top = "-100px"; // Hide the navigation bar smoothly
  } else if (currentScrollY < previousScrollY) { // Scrolling up
    navBar.style.top = "0px"; // Show the navigation bar at the top
  }

  previousScrollY = currentScrollY;
});


document.addEventListener('DOMContentLoaded', () => {
    const elementoscarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementoscarousel, {
        duration: 150,
        dist: -80,
        shift: 1,
        padding: 5,
        numVisible: 3,
        indicators: false,
        moWrap: false
    });
})

let enlacesHeader = document.querySelectorAll(".enlaces-1234")[0];
let semaforo = true;

document.querySelectorAll(".flecha-menu")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".flecha-menu")[0].style.color ="#ff0000";
        semaforo= false;
    }else{
        document.querySelectorAll(".flecha-menu")[0].style.color ="#000"
        semaforo= true
    }


    enlacesHeader.classList.toggle("menudos")
})


