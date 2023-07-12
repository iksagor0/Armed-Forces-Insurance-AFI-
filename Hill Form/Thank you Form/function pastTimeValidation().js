function pastTimeValidation() {
  const iDate = document.getElementById("txtCallDate").value;
  const iHour = document.getElementById("drpHH").value;
  const iMIN = document.getElementById("drpMM").value;
  const iAmPm = document.getElementById("drpAMPM").value;

  const getDate = new Date(iDate);
  const iYR = getDate.getFullYear();
  const iMM = getDate.getMonth();
  const iDD = getDate.getDate();
  const iHR = iAmPm === "pm" ? Number(iHour) + 12 : iHour;

  const inputtedTime = new Date(iYR, iMM, iDD, iHR, iMIN);

  const now = Date.now();
  const iNow = inputtedTime.getTime();

  const isFutureTime = iNow > now;

  // show Error message
  const errMsg = document.querySelector(".dateGroup .error__msg");
  if (!isFutureTime) {
    errMsg.innerHTML = "Date and time shouldn't be past";
    errMsg.classList.remove("d-none");
  } else {
    errMsg.classList.add("d-none");
    errMsg.innerHTML = "required";
  }

  return isFutureTime;
}
