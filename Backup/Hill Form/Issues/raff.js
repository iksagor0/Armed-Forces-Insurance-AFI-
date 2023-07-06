// NumOfLossesWrapper
// openClaimsWrapper

// Civil Union/Domestic Partner 1240line

// document.querySelectorAll(".DOB").forEach((el) => {
//   dateValidation(el, thisYear - 17);

//   el.addEventListener("change", (e) => {
//     const isFullDate = e.target.value.length != 10;

//     const errLabel = el.closest(".input-container").querySelector(".error");

//     if (isFullDate) {
//       errLabel.innerText = "Enter a valid Birth date";
//       errLabel.style.display = "block";
//     } else {
//       errLabel.style.display = "none";
//     }
//   });
// });

// .military-affiliation-box  .form-control
// militery-chck;

// Military, Military Spouse onUnCheckFieldBlank
function onUnCheckFieldBlank(checkboxId, sectionClass) {
  const checkBoxEl = document.getElementById(checkboxId);
  checkBoxEl.addEventListener("change", () => {
    const isChecked = checkBoxEl.checked;
    if (!isChecked) {
      $(`${sectionClass}  .form-control`).val("");
    }
  });
}

onUnCheckFieldBlank("militery-chck", ".military-affiliation-box");
onUnCheckFieldBlank("Spouse-chck", ".Spouse-Information-box");

//
document.querySelectorAll(".alphabeticOnly")?.forEach((input) => {
  input.addEventListener("input", (e) => {
    e.target.value = e.target?.value.replace(/[^a-zA-Z\s-]/g, "");
  });
});
