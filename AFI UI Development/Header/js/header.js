const body = document.body;
const hamburger = document.querySelector("#hamburger");
const navHasChildItems = document.querySelectorAll(
  ".primary-nav__list .primary-nav__list-item.has-children"
);

hamburger.addEventListener("click", () => {
  body.classList.toggle("offscreen-is-active");
});

navHasChildItems.forEach((navItem) => {
  navItem.addEventListener("click", function () {
    if (screen.width < 1080) {
      this.classList.toggle("toggle-is-open");
    }
  });
});

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

// Remove Active Class when page reload
window.onload(() => {
  const active = document.querySelector(".level1.active");
  console.log(active);
  // if (active) {
  //   active.classList.remove("active");
  // }
});
