const label = document.createElement("label");
label.id = field.id + "-error";
label.setAttribute("for", field.name);
label.style.display = "block";

field.parentElement.appendChild(label);

const formFields = document.querySelectorAll(".form-control");
formFields.forEach((f) => {
  f.addEventListener("input", () => {
    f.classList.remove("error");

    const errField = f.parentElement.querySelector("label.error");
    if (errField) errField.style.display = "none";
  });
});
