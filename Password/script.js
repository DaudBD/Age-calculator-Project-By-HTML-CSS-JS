
const passwordForm = document.getElementById("passwordform");
//Password Checker Js
const passwordInput = document.getElementById("password");
const submitP = document.getElementById("submit");
const resultCheck = document.getElementById("result");

let pass = "";

submitP.addEventListener("click", noloadbrowser() => {

    noloadbrowser.preventDefault();
    const pass = passwordInput.value;
    const length = pass.length;

    if (length <= 8) {

        resultCheck.textContent = "Weak Password";

    } else if (length < 12) {

        resultCheck.textContent = "Medium Password";

    } else {

        resultCheck.textContent = "Strong Password - Please Use It";

    }

});