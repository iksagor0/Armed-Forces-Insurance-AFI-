const section_wrapper = document.querySelectorAll(".toggle_section_wrapper");

if (screen.width <= 768) {
  section_wrapper.forEach((section) => {
    const heading = section.querySelector(".footer__heading");

    heading.addEventListener("click", () =>
      section.classList.toggle("show_toggle")
    );
  });
}
