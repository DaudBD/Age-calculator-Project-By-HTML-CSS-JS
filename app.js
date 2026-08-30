
// At First HTMl From Dhorlam 
const form = document.getElementById("formAge");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const error = document.getElementById("error");

const yearsResult = document.getElementById("years");
const monthsResult = document.getElementById("months");
const daysResult = document.getElementById("days");

// Normal Function
// form.addEventListener("submit", function (noloadbrowser) {
//   noloadbrowser.preventDefault();
// });

// Arrow function used
form.addEventListener("submit", (noloadbrowser) => {
  noloadbrowser.preventDefault();

  const today = new Date();
  const day = Number(dayInput.value);
  const month = Number(monthInput.value);
  const year = Number(yearInput.value);

  error.textContent = "";

  // Basic validation
  if (!dayInput.value || day < 1 || day > 31) {
    error.textContent = "Please enter a valid day.";
    return;
  }

  if (monthInput.value === "" || month < 0 || month > 11) {
    error.textContent = "Please select a valid month.";
    return;
  }

  if (!yearInput.value || year < 1 || year > today.getFullYear()) {
    error.textContent = "Please enter a valid year.";
    return;
  }

  // Check actual date
  const birthDate = new Date(year, month - 1, day);

  if (
    birthDate.getFullYear() !== year ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day
  ) {
    error.textContent = "Please enter a valid date.";
    return;
  }

  // Future date check
  if (birthDate > today) {
    error.textContent = "Birth date cannot be in the future.";
    return;
  }

  // Calculate age
  let ageYears = today.getFullYear() - year;
  let ageMonths = today.getMonth() - (month - 1);
  let ageDays = today.getDate() - day;

  if (ageDays < 0) {
    ageMonths--;

    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += previousMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  // Show result
  yearsResult.textContent = ageYears;
  monthsResult.textContent = ageMonths;
  daysResult.textContent = ageDays;
});

// Short Version Alt Function Arrow
// form.addEventListener("submit", noloadbrowser => noloadbrowser.preventDefault());

// MaxShort Version Alt
// form.onsubmit = noloadbrowser => noloadbrowser.preventDefault();

// User Input Nice Kivave
// const day = Number(dayInput.value);
// const month = Number(monthInput.value);
// const year = Number(yearInput.value);
// const today = new Date();
// const currentDay = today.getDate();
// const currentMonth = today.getMonth();
// const currentYear = today.getFullYear();
// error.textContent = "";
