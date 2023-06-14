const mainTextContent = document.querySelector(".main__text__content");

const parent_mainTextContent = mainTextContent?.parentElement;
parent_mainTextContent?.classList.add("auto_section__container");

// Hero Banner Form
const heroForm = document.querySelector("#quote-selector__form");
const heroFormFields = document.querySelectorAll(
  "#quote-selector__form input[name=type]"
);

let heroFormActionUrl = "";

heroFormFields.forEach((input) => {
  input.addEventListener("change", function () {
    heroFormActionUrl = document
      .querySelector("input[name=type]:checked")
      .getAttribute("data-url");

    heroForm.action = heroFormActionUrl;
  });
});

heroForm.addEventListener("submit", (e) => {
  e.preventDefault();
  location.href = heroFormActionUrl;
});
