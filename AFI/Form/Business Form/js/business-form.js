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

// Selectors
const nextBtn = document.querySelector("#next_btn");
const backBtn = document.querySelector("#back_btn");

let stepCount = 0;

// Next ******************************************
nextBtn.addEventListener("click", () => {
  const isSelecteligibility = eligibilityValidation();

  if (stepCount === 0) if (!Boolean(isSelecteligibility)) return false;
  if (stepCount === 1) {
    if (isSelecteligibility === "military") {
      if (militaryFormValidation()) return false;
    }
  }

  console.log(userData);

  // stepCount State
  const maxStep = formList.length - 1;
  stepCount >= maxStep ? stepCount : stepCount++;

  // Show Form
  showActiveForm(stepCount);
});

// ***************************************************

// Back
backBtn.addEventListener("click", () => {
  stepCount <= 0 ? stepCount : stepCount--;

  showActiveForm(stepCount);
});

// Show Form by Condition
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
// Error Message if value user makes any mistake
function eligibilityErrrMessage(data, selector) {
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

// *********************************************
// *********************************************
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
    }
    // stepCount = 1;
    // window.scrollTo(0, 0);

    // set eligibilityStatus to userData
    userData.eligibilityStatus = eligibilityStatus;
  }

  // Error Message if value = null
  eligibilityErrrMessage(
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

  const isAnyError = validationResult.some((result) => result === false);

  userData.militaryFirstName = militaryFirstName?.value;
  userData.militaryLastName = militaryLastName?.value;
  userData.branchOfService = branchOfService?.value;
  userData.militaryStatus = militaryStatus?.value;
  userData.militaryRank = militaryRank?.value;

  console.log(userData);
  console.log(isAnyError);

  return isAnyError;
}

// ********** Parent's Information ***********

// ********** Child's Information ***********

// ********** MULTI-STEP 1 Validation ***********

// ********** MULTI-STEP 2 Validation ***********

// ********** MULTI-STEP 3 Validation ***********

// ********** MULTI-STEP 4 Validation ***********
