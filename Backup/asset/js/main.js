/********************************************************
 *                   HEADER
 ********************************************************/
window.addEventListener("load", () => {
  const hamburger = document.querySelector("#hamburger");

  hamburger.addEventListener("click", () => {
    document.body.classList.toggle("screen_active");
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
});

window.addEventListener("load", () => {
  const activeNav = document.querySelector(".level1.active");
  activeNav?.classList.remove("active");
});

// // Script to add Font AwesOme
// window.onload = () => {
//   const head = document.getElementsByTagName("head")[0];
//   const link = document.createElement("link");
//   link.rel = "stylesheet";
//   link.type = "text/css";
//   link.href =
//     "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css";

//   head.appendChild(link);
// };

window.addEventListener("load", () => {
  const activeNav = document.querySelector(".level1.active");
  activeNav?.classList.remove("active");
});

/********************************************************
 *                   FOOTER
 ********************************************************/
window.addEventListener("load", () => {
  const section_wrapper = document.querySelectorAll(".toggle_section_wrapper");
  section_wrapper.forEach((parent) => {
    parent.querySelector("h2").addEventListener("click", () => {
      parent.classList.toggle("ul_open");
    });
  });
});

/********************************************************
 *                  HOME CARD GROUP
 ********************************************************/
window.addEventListener("load", () => {
  if (screen.width <= 991) {
    const mySlider = document.querySelector(".mySlider");

    const mySwiper = mySlider?.firstElementChild;
    mySwiper?.classList.add("mySwiper");

    const swiperWrapper = mySwiper?.firstElementChild;
    swiperWrapper?.classList.remove("row");
    swiperWrapper?.classList.add("swiper-wrapper");

    // Add "swiper-slide" class in sliderItems
    //  const sliderItems = document.querySelectorAll(".mySwiper .slider_item");
    const sliderItems = document.querySelectorAll(".swiper-wrapper .col-lg-3");

    if (sliderItems) {
      sliderItems?.forEach((item) => {
        item?.classList.add("swiper-slide");
      });
    }

    // Pagination
    const pagination = document.createElement("div");
    pagination.classList.add("swiper-pagination");

    mySwiper.appendChild(pagination);

    // Initiate Slider
    const swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      // autoplay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        450: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
    });
  }
});

/********************************************************
 *                  HOME BLUE PODS
 ********************************************************/
window.addEventListener("load", () => {
  const bluePodItem = document.querySelector(".blue_pod_item");

  const parent_bluePods = bluePodItem?.parentElement;
  parent_bluePods?.classList.add("blue_pods_container");
});

/********************************************************
 *                  HOME BANNER FORM
 ********************************************************/
// window.addEventListener("load", () => {
//   const heroForm = document.querySelector("#quote-selector__form");
//   const heroFormFields = document.querySelectorAll(
//     "#quote-selector__form input[name=type]"
//   );

//   let heroFormActionUrl = "";

//   heroFormFields.forEach((input) => {
//     input.addEventListener("change", function () {
//       heroFormActionUrl = document
//         .querySelector("input[name=type]:checked")
//         .getAttribute("data-url");

//       heroForm.action = heroFormActionUrl;
//     });
//   });
// });

// heroForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   location.href = heroFormActionUrl;
// });

/********************************************************
 *                  ARTICLE SHARE
 ********************************************************/
// ARTICLE PAGE SHARE FUNCTIONALITY
window.addEventListener("load", () => {
  const shareBadges = document.querySelector(".share-badges.js-share-badges");
  if (shareBadges) {
    shareBadges.addEventListener("click", () =>
      shareBadges.classList.toggle("triggered")
    );
  }
});
