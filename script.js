let menuBtn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");

const menuMobile = document.getElementById("mobile-menu");
const getCounts = document.querySelectorAll(".counter");
let scrollTaget = false;

menuBtn.addEventListener("click", navToggle);


// Add an event of scroll page 
document.addEventListener('scroll',scrollPage);

function navToggle() {
  // open the hamburger button
  menuBtn.classList.toggle("open");
  // Show overlay on the homescreen and show side menu
  overlay.classList.toggle("overlay-show");
  // Stop background scrolling when sidemenu is open
  document.body.classList.toggle("stop-scrolling");
  // show list items inside the menu sidebar
  menuMobile.classList.toggle("show-menu");
}

// Scroll-stats animation

function scrollPage() {
  const scrollPos = window.scrollY;
  console.log(scrollPos);
  if (scrollPos >= 250 && scrollPos <=350) {
    countUp();
    scrollTaget = true;
  } else if(scrollPos < 100 && scrollTaget) {
    resetCount();
    scrollTaget = false;
  }
};


// Stats counter

function countUp() {
  getCounts.forEach((counter) => {
    counter.innerText = "0";

    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      // Increment

      const increment = target / 100
      // if counter is less than target, add increment

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCount, 75);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
}

function resetCount() {
    getCounts.forEach((counter) => counter.innerText = '0');
}

// countUp();
