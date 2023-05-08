// DATA
const userData = {
  eligibilityStatus: "",
};

// Forms
const multStepForm = [
  "multi__step_1",
  "multi__step_2",
  "multi__step_3",
  "multi__step_4",
];
const defalutForms = ["radio_select", ...multStepForm];
let formList = defalutForms;

// *********************************************
//       FORM SUBMITION AND STEP HANDLING
// *********************************************
// Selectors
const nextBtn = document.querySelector("#next_btn");
const backBtn = document.querySelector("#back_btn");

let stepCount = 0;
let maxStep = formList.length - 1;

// ***** NEXT FUNCTIONALITY *****
nextBtn.addEventListener("click", () => {
  const isSelectEligibility = eligibilityValidation();

  if (stepCount === 0) {
    if (!Boolean(isSelectEligibility)) return false;
  }

  const additionalForm = [
    "military_information",
    "parent_information",
    "child_information",
  ];

  if (formList.some((item) => additionalForm.includes(item))) {
    //   If additonal form has in arrayList
    if (stepCount === 1 && formList.includes("military_information")) {
      if (militaryFormValidation()) return false;
    }

    if (stepCount === 1 && formList.includes("parent_information")) {
      if (parentFormValidation()) return false;
    }

    if (stepCount === 1 && formList.includes("child_information")) {
      if (childFormValidation()) return false;
    }

    if (stepCount === 2) {
      if (multiStep1Validation()) return false;
    }
    if (stepCount === 3) {
      if (multiStep2Validation()) return false;
    }
    if (stepCount === 4) {
      if (multiStep3Validation()) return false;
    }

    if (stepCount === 5) {
      const finalFormError = multiStep4Validation();

      console.log(finalFormError);
      if (!finalFormError) {
        // Go to Thank You Page
        window.location.href = "https://afi.org/";
      }
    }
  } else {
    //   If no additonal form
    if (stepCount === 1) {
      if (multiStep1Validation()) return false;
    }
    if (stepCount === 2) {
      if (multiStep2Validation()) return false;
    }
    if (stepCount === 3) {
      if (multiStep3Validation()) return false;
    }
    if (stepCount === 4) {
      const finalFormError = multiStep4Validation();

      console.log(finalFormError);
      if (!finalFormError) {
        // Go to Thank You Page
        window.location.href = "https://afi.org/";
      }
    }
  }

  console.log(userData);

  stepCount >= maxStep ? stepCount : stepCount++;

  // Show Form
  showActiveForm(stepCount);
});

// Back
backBtn.addEventListener("click", () => {
  stepCount <= 0 ? stepCount : stepCount--;

  showActiveForm(stepCount);
});

// *********************************************
//           SHOW FORM BY CONDITION
// *********************************************
function showActiveForm(stepCount) {
  // remove active_section class from everywhere
  document.querySelector(".active_section").classList.remove("active_section");

  // set active_section class
  document
    .querySelector(`.${formList[stepCount]}`)
    ?.classList.add("active_section");

  //   console.log(stepCount);
  conditionForBackBtn();
}

// Conditionally Hide Back Btn
function conditionForBackBtn() {
  if (stepCount <= 0) {
    backBtn.classList.add("hide");
  } else {
    backBtn.classList.remove("hide");
  }
}
conditionForBackBtn();

// *********************************************
//              ERROR HANDLING
// *********************************************

// Error Message if value user makes any mistake
function eligibilityErrorMessage(data, selector) {
  const errorDiv = document.querySelector(selector);

  if (!data) {
    errorDiv?.classList.add("error");
  } else {
    errorDiv?.classList.remove("error");
  }
}

function inputErrorMessage(selector, msg) {
  const hasErrorField =
    selector?.parentElement?.querySelector(".field_message");

  if (!hasErrorField) {
    // create error message field
    const div = document.createElement("div");
    div.className = "field_message error";
    div.innerHTML = msg;
    selector?.parentElement.appendChild(div);
  } else {
    hasErrorField?.classList.add("error");
    hasErrorField.innerHTML = msg;
  }
}

// Check is input value is correct
function isValueEmpty(selector) {
  if (!selector?.value) {
    inputErrorMessage(selector, "This field is required");
    return false;
  } else {
    return true;
  }
}

// Input Number Only
document.querySelectorAll(".field__input.numberOnly")?.forEach((input) => {
  input.addEventListener("input", (e) => {
    e.target.value = e.target?.value.replace(/[^0-9]/g, "");
  });
});

// Alphabetic only
function alphabeticOnly(selector) {
  const letterRegEx = /^[A-Za-z]+$/;
  if (letterRegEx.test(selector?.value)) {
    return true;
  } else {
    inputErrorMessage(selector, "Please enter alphabetic characters only");
    return false;
  }
}

// Minimum value need
function minValue(selector, minValue = 5) {
  if (selector?.value.length != minValue) {
    inputErrorMessage(selector, "Please enter a valid Zip code");
    return false;
  } else {
    return true;
  }
}

// Email validation
function emailValidation(selector) {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regEx.test(selector?.value)) {
    return true;
  } else {
    inputErrorMessage(selector, "Please enter a valid email address");
    return false;
  }
}

// Phone Number validation
function phoneValidation(selector) {
  const regEx = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  if (regEx.test(selector?.value)) {
    return true;
  } else {
    inputErrorMessage(selector, "Please enter a valid phone number");
    return false;
  }
}
// Phone Number Pattern
document
  .getElementById("policyHolderPhoneNumber")
  .addEventListener("input", (e) => {
    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  });
// *********************************************
//              FORM VALIDATION
// *********************************************
// ********** Eligibility Validation ***********
function eligibilityValidation() {
  const eligibilityStatus = document.querySelector(
    'input[name="eligibilityStatus"]:checked'
  )?.value;

  // Select Formlist as user eligibilityStatus
  if (Boolean(eligibilityStatus)) {
    if (eligibilityStatus === "military") {
      formList = ["radio_select", "military_information", ...multStepForm];
    } else if (eligibilityStatus === "child") {
      formList = ["radio_select", "parent_information", ...multStepForm];
    } else if (eligibilityStatus === "parent") {
      formList = ["radio_select", "child_information", ...multStepForm];
    } else {
      formList = defalutForms;
      //   stepCount++;
    }
    // stepCount = 1;
    // window.scrollTo(0, 0);
    maxStep = formList.length - 1;

    // set eligibilityStatus to userData
    userData.eligibilityStatus = eligibilityStatus;
  }

  // Error Message if value = null
  eligibilityErrorMessage(
    userData.eligibilityStatus,
    ".radio__form_section .field_message"
  );
  return eligibilityStatus;
}

// ********** Military Information ***********
function militaryFormValidation() {
  const militaryFirstName = document.querySelector("#militaryFirstName");
  const militaryLastName = document.querySelector("#militaryLastName");
  const branchOfService = document.querySelector("#branchOfService");
  const militaryStatus = document.querySelector("#militaryStatus");
  const militaryRank = document.querySelector("#militaryRank");

  const validationResult = [];
  validationResult[0] = isValueEmpty(militaryFirstName);
  validationResult[1] = isValueEmpty(militaryLastName);
  validationResult[2] = isValueEmpty(branchOfService);
  validationResult[3] = isValueEmpty(militaryStatus);
  validationResult[4] = isValueEmpty(militaryRank);
  validationResult[5] = alphabeticOnly(militaryFirstName);
  validationResult[6] = alphabeticOnly(militaryLastName);

  const isAnyError = validationResult.some((result) => result === false);

  userData.militaryFirstName = militaryFirstName?.value;
  userData.militaryLastName = militaryLastName?.value;
  userData.branchOfService = branchOfService?.value;
  userData.militaryStatus = militaryStatus?.value;
  userData.militaryRank = militaryRank?.value;

  return isAnyError;
}

// ********** Parent's Information ***********
function parentFormValidation() {
  const parentFirstName = document.querySelector("#parentFirstName");
  const parentLastName = document.querySelector("#parentLastName");

  const validationResult = [];
  validationResult[0] = isValueEmpty(parentFirstName);
  validationResult[1] = isValueEmpty(parentLastName);
  validationResult[2] = alphabeticOnly(parentFirstName);
  validationResult[3] = alphabeticOnly(parentLastName);

  const isAnyError = validationResult.some((result) => result === false);

  userData.parentFirstName = parentFirstName?.value;
  userData.parentLastName = parentLastName?.value;

  return isAnyError;
}

// ********** Child's Information ***********
function childFormValidation() {
  const childFirstName = document.querySelector("#childFirstName");
  const childLastName = document.querySelector("#childLastName");

  const validationResult = [];
  validationResult[0] = isValueEmpty(childFirstName);
  validationResult[1] = isValueEmpty(childLastName);
  validationResult[2] = alphabeticOnly(childFirstName);
  validationResult[3] = alphabeticOnly(childLastName);

  const isAnyError = validationResult.some((result) => result === false);

  userData.childFirstName = childFirstName?.value;
  userData.childLastName = childLastName?.value;

  return isAnyError;
}

// ********** MULTI-STEP 1 Validation ***********
function multiStep1Validation() {
  const policyHolderFirstName = document.querySelector(
    "#policyHolderFirstName"
  );
  const policyHolderLastName = document.querySelector("#policyHolderLastName");
  const policyHolderEmail = document.querySelector("#policyHolderEmail");
  const policyHolderPhoneType = document.querySelector(
    "#policyHolderPhoneType"
  );
  const policyHolderPhoneNumber = document.querySelector(
    "#policyHolderPhoneNumber"
  );

  const validationResult = [];
  validationResult[0] = isValueEmpty(policyHolderFirstName);
  validationResult[1] = isValueEmpty(policyHolderLastName);
  validationResult[2] = emailValidation(policyHolderEmail);
  validationResult[3] = isValueEmpty(policyHolderEmail);
  validationResult[4] = isValueEmpty(policyHolderPhoneType);
  validationResult[5] = phoneValidation(policyHolderPhoneNumber);
  validationResult[6] = isValueEmpty(policyHolderPhoneNumber);
  validationResult[7] = alphabeticOnly(policyHolderFirstName);
  validationResult[8] = alphabeticOnly(policyHolderLastName);

  const isAnyError = validationResult.some((result) => result === false);

  userData.policyHolderFirstName = policyHolderFirstName?.value;
  userData.policyHolderLastName = policyHolderLastName?.value;
  userData.policyHolderEmail = policyHolderEmail?.value;
  userData.policyHolderPhoneType = policyHolderPhoneType?.value;
  userData.policyHolderPhoneNumber = policyHolderPhoneNumber?.value.replace(
    /\D/g,
    ""
  );

  console.log(userData);

  return isAnyError;
}

// ********** MULTI-STEP 2 Validation ***********
function multiStep2Validation() {
  const businessName = document.querySelector("#businessName");
  const businessWebsite = document.querySelector("#businessWebsite");
  const businessType = document.querySelector("#businessType");
  const businessTaxId = document.querySelector("#businessTaxId");
  const businessPhysicalAddress = document.querySelector(
    "#businessPhysicalAddress"
  );
  const city = document.querySelector("#city");
  const state = document.querySelector("#state");
  const zip = document.querySelector("#zip");

  const validationResult = [];
  validationResult[0] = isValueEmpty(businessName);
  validationResult[1] = isValueEmpty(businessType);
  validationResult[2] = isValueEmpty(businessPhysicalAddress);
  validationResult[3] = isValueEmpty(city);
  validationResult[4] = isValueEmpty(state);
  validationResult[5] = minValue(zip, 5);
  validationResult[6] = isValueEmpty(zip);

  const isAnyError = validationResult.some((result) => result === false);

  userData.businessName = businessName?.value;
  userData.businessWebsite = businessWebsite?.value;
  userData.businessType = businessType?.value;
  userData.businessTaxId = businessTaxId?.value;
  userData.city = city?.value;
  userData.state = state?.value;
  userData.zip = zip?.value;

  console.log(userData);

  return isAnyError;
}

// ********** MULTI-STEP 3 Validation ***********
function multiStep3Validation() {
  const typeOfInsurance = document.getElementsByName("typeOfInsurance");

  userData.policyCoverage = [];

  typeOfInsurance.forEach((item) => {
    if (item?.checked) {
      userData.policyCoverage.push(item?.value);
    }
  });

  const isAnyError = userData.policyCoverage.length <= 0;

  if (isAnyError) {
    // Error Message if value = null
    eligibilityErrorMessage(false, ".multi__step_3 .field_message");
  }

  return isAnyError;
}

// ********** MULTI-STEP 4 Validation ***********
function multiStep4Validation() {
  const currentInsuranceCompany = document.querySelector(
    "#currentInsuranceCompany"
  );
  const insuranceCompany = document.querySelector("#insuranceCompany");
  const policyRenewalDate = document.querySelector("#policyRenewalDate");

  //   const isAnyError = validationResult.some((result) => result === false);

  userData.currentInsuranceCompany = currentInsuranceCompany?.value;
  userData.insuranceCompany = insuranceCompany?.value;
  userData.policyRenewalDate = policyRenewalDate?.value;

  let validationResult = false;

  if (currentInsuranceCompany?.value === "Other") {
    // if currentInsuranceCompany = "Other" then Insurance Company value id required
    validationResult = !isValueEmpty(insuranceCompany);
  }

  console.log(userData);

  return validationResult;
}

// ********** OTHERS FUNCTIONALITY ***********
// if currentInsuranceCompany = "Other" then Insurance Company field will show
const currentInsuranceCompany = document.querySelector(
  "#currentInsuranceCompany"
);
currentInsuranceCompany.addEventListener("change", () => {
  if (currentInsuranceCompany?.value === "Other") {
    document
      .querySelector(".multi__step_4 .insuranceCompany")
      ?.classList.remove("conditionally_hidden_field");
  } else {
    document
      .querySelector(".multi__step_4 .insuranceCompany")
      ?.classList.add("conditionally_hidden_field");
  }
});

// KeyPress remove all Error Message
document.querySelectorAll(".form_section")?.forEach((section) => {
  section.querySelectorAll(".field__input")?.forEach((input) => {
    input.addEventListener("keypress", () => {
      section
        .querySelectorAll(".field_message.error")
        ?.forEach((errorField) => {
          errorField?.classList.remove("error");
        });
    });
  });
});

// Press Enter Submit Form
document.querySelectorAll(".field__input")?.forEach((input) => {
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      // Trigger the button element with a click
      document.getElementById("next_btn").click();
    }
  });
});
