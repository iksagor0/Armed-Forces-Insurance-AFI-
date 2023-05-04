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
let maxStep = formList.length - 1;

// Next ******************************************
nextBtn.addEventListener("click", () => {
  const isSelectEligibility = eligibilityValidation();

  if (stepCount === 0) {
    if (!Boolean(isSelectEligibility)) return false;
  }

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
    if (stepCount === 1) {
      if (militaryFormValidation()) return false;
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
      multiStep4Validation();
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
      multiStep4Validation();
    }
  }

  console.log(userData);

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

  const isAnyError = validationResult.some((result) => result === false);

  userData.militaryFirstName = militaryFirstName?.value;
  userData.militaryLastName = militaryLastName?.value;
  userData.branchOfService = branchOfService?.value;
  userData.militaryStatus = militaryStatus?.value;
  userData.militaryRank = militaryRank?.value;

  //   console.log(userData);
  //   console.log(isAnyError);

  return isAnyError;
}

// ********** Parent's Information ***********

// ********** Child's Information ***********

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
  validationResult[2] = isValueEmpty(policyHolderEmail);
  validationResult[3] = isValueEmpty(policyHolderPhoneType);
  validationResult[4] = isValueEmpty(policyHolderPhoneNumber);

  const isAnyError = validationResult.some((result) => result === false);

  userData.policyHolderFirstName = policyHolderFirstName?.value;
  userData.policyHolderLastName = policyHolderLastName?.value;
  userData.policyHolderEmail = policyHolderEmail?.value;
  userData.policyHolderPhoneType = policyHolderPhoneType?.value;
  userData.policyHolderPhoneNumber = policyHolderPhoneNumber?.value;

  console.log(userData);
  console.log(isAnyError);

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
  const policyHolderPhoneNumber = document.querySelector("#zip");

  const validationResult = [];
  validationResult[0] = isValueEmpty(businessName);
  validationResult[1] = isValueEmpty(businessType);
  validationResult[2] = isValueEmpty(businessPhysicalAddress);
  validationResult[3] = isValueEmpty(city);
  validationResult[4] = isValueEmpty(state);
  validationResult[5] = isValueEmpty(zip);

  const isAnyError = validationResult.some((result) => result === false);

  userData.businessName = businessName?.value;
  userData.businessWebsite = businessWebsite?.value;
  userData.businessType = businessType?.value;
  userData.businessTaxId = businessTaxId?.value;
  userData.city = city?.value;
  userData.state = state?.value;
  userData.zip = zip?.value;

  console.log(userData);
  console.log(isAnyError);

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

  console.log(isAnyError);

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

  console.log(userData);

  // Go to Thank You Page
  window.location.href = "https://afi.org/";
}
