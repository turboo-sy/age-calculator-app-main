// input-container 
let inputDay = document.querySelector(".input-day")
let inputMonth = document.querySelector(".input-moth")
let inputYear = document.querySelector(".input-Year")
let button = document.querySelector("button")
let span = document.querySelectorAll("span")
let errorText = document.querySelectorAll("small")

let isValid = false;
let ddd = new Date()
function CalculateDate() {
    if (isValid) {
      let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
      console.log(birthday);
      let birthdayObj = new Date(birthday);
      let ageDiffMill = Date.now() - birthdayObj;
      let ageDate = new Date(ageDiffMill);
      let ageYears = ageDate.getUTCFullYear() - 1970;
      let ageMonth = ageDate.getUTCMonth();
      let ageDay = ageDate.getUTCDay();
      // DISPLAYING EVERYTHING
      opD.textContent = ageDay;
      opM.textContent = ageMonth;
      opY.textContent = ageYears;
    } else{
        errorText[0].style.display = "block"
        errorText[1].style.display = "block"
    }
  }

button.addEventListener("click", CalculateDate);

inputDay.addEventListener("input", (e) => {
  if (+inputDay.value > 31) {
    errorText[0].style.display = "block"
    isValid = false;
    return;
  } else {
    isValid = true;
    errorText[0].style.display="none";
  }
  if (+inputDay.value === 0) {
    isValid = false;
    errorText[0].style.display = "block"
    isValid = false;
    return;
  } else {
    errorText[0].style.display="none";
  }
});

inputMonth.addEventListener("input", (e) => {
  if (+inputMonth.value > 12) {
    errorText[1].style.display = "block"
    isValid = false;
    return;
  } else {
    isValid = true;
    errorText[1].style.display="none";
  }
  if (+inputMonth.value === 0) {
    isValid = false;
    errorText[1].style.display = "block"
    isValid = false;
    return;
  } else {
    errorText[1].style.display="none";
  }
});

inputYear.addEventListener("input", (e) => {
  if (+inputYear.value > 2024 ) {
    errorText[2].innerHTML = "Most Be in The Past"
    isValid = false;
    return;
  } else {
    isValid = true;
    errorText[2].style.display="none";
  }
  if (+inputYear.value === 0) {
    isValid = false;
    errorText[2].style.display = "block"
    isValid = false;
    return;
  } else {
    errorText[2].style.display="none";
  }
});



// output-container 
let opY = document.querySelector(".output-year")
let opM = document.querySelector(".output-month")
let opD = document.querySelector(".output-day")