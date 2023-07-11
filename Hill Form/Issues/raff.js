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

// SSN Previous Code
document.querySelectorAll(".SSN").forEach((field) => {
  field.addEventListener("input", (e) => {
    field.classList.remove("error-field");
    field
      .closest(".input-container")
      .querySelector(".error-label").style.display = "none";

    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,2})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "");
  });

  field.addEventListener("change", function (e) {
    const l = e.target.value.length;

    const errLabel = field
      .closest(".input-container")
      .querySelector(".error-label");

    if (l != 11) {
      field.classList.add("error-field");

      errLabel.innerHTML = "SSN should be 9 digits";
      errLabel.style.display = "block";
    } else {
      zipCode.classList.remove("error-field");
      errLabel.style.display = "none";
    }
  });
});

/********************************************************
 *                   SSN field
 ********************************************************/
// *********** SSN Validation ***********
document.querySelectorAll(".SSN").forEach((field) => {
  const maskSSN = document.getElementById(field.id + "Mask");

  field.addEventListener("input", (e) => {
    field.classList.remove("error-field");
    field
      .closest(".input-container")
      .querySelector("error-label").style.display = "none";

    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,2})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : x[1] + "-" + x[2] + (x[3] ? "-" + x[3] : "");

    //
    const ssnVal = e.target.value.slice(7, 11);
    const valLen = e.target.value.length;
    const Xmask = "XXX-XX-XXXX".slice(0, valLen);

    maskSSN.value = valLen < 7 ? Xmask : "XXX-XX-" + ssnVal;
  });

  field.addEventListener("change", function (e) {
    const l = e.target.value.length;
    if (l != 11) {
      this.classList.add("error-field");
      const errLabel = field
        .closest(".input-container")
        .querySelector("error-label");

      errLabel.innerHTML = "SSN should be 9 digits";
      errLabel.style.display = "block";
    }
  });

  //
  field.addEventListener("blur", () => {
    field.style.display = "none";
    maskSSN.style.display = "block";
  });

  maskSSN.addEventListener("focus", () => {
    maskSSN.style.display = "none";
    field.style.display = "block";
    field.focus();
  });
});
