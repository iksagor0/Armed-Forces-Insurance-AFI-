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

// Next
nextBtn.addEventListener("click", () => {
  const isSelecteligibility = eligibilityValidation();
  if (!Boolean(isSelecteligibility)) return false;

  // stepCout State
  const maxStep = formList.length - 1;
  stepCount >= maxStep ? stepCount : stepCount++;

  // Show Form
  showActiveForm(stepCount);
});

// Back
backBtn.addEventListener("click", () => {
  stepCount <= 0 ? stepCount : stepCount--;

  showActiveForm(stepCount);
});

function showActiveForm(stepCount) {
  // remove active_section class from everywhere
  document.querySelector(".active_section").classList.remove("active_section");

  // set active_section class
  document
    .querySelector(`.${formList[stepCount]}`)
    ?.classList.add("active_section");

  console.log(stepCount);
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

// **************************
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
  }

  console.log(eligibilityStatus);
  return eligibilityStatus;
}
