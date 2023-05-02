// ******* New Code 28 Arpil *******
const body = document.body;
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  body.classList.toggle("screen_active");
});

// Nav Item
const itemWithSubItems = document.querySelectorAll(
  ".primary-nav .level1.submenu"
);
itemWithSubItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (screen.width < 991) {
      itemWithSubItems.querySelector("ul").classList.toggle("sub_nav_open");
    }
  });
});

// ******* Main Code *******
// const body = document.body;
// const hamburger = document.querySelector("#hamburger");
// const navHasChildItems = document.querySelectorAll(
//   ".primary-nav__list .primary-nav__list-item.has-children"
// );

// hamburger.addEventListener("click", () => {
//   body.classList.toggle("offscreen-is-active");
// });

// navHasChildItems.forEach((navItem) => {
//   navItem.addEventListener("click", function () {
//     if (screen.width < 1080) {
//       this.classList.toggle("toggle-is-open");
//     }
//   });
// });

// Script to add Font Aweosme
window.onload = () => {
  const head = document.getElementsByTagName("head")[0];
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css";

  head.appendChild(link);
};
