const form = document.getElementById("ageForm");

const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");

const error = document.getElementById("error");

const yearsResult = document.getElementById("years");
const monthsResult = document.getElementById("months");
const daysResult = document.getElementById("days");


form.addEventListener("submit", function (e) {

    e.preventDefault();

    const day = Number(dayInput.value);
    const month = Number(monthInput.value);
    const year = Number(yearInput.value);

    const today = new Date();

    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();


    error.textContent = "";


    // Basic validation

    if (day < 1 || day > 31) {
        error.textContent = "Please enter a valid day.";
        return;
    }


    if (month < 0 || month > 11 || monthInput.value === "") {
        error.textContent = "Please select a valid month.";
        return;
    }


    if (year < 1 || year > currentYear) {
        error.textContent = "Please enter a valid year.";
        return;
    }


    // Check actual date

    const birthDate = new Date(year, month, day);

    if (
        birthDate.getFullYear() !== year ||
        birthDate.getMonth() !== month ||
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

    let ageYears = currentYear - year;
    let ageMonths = currentMonth - month;
    let ageDays = currentDay - day;


    if (ageDays < 0) {
        ageMonths--;

        const previousMonth = new Date(
            currentYear,
            currentMonth,
            0
        );

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