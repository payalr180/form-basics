function setFormMessage(formElement, type, message) {
    console.log("1");
    const messageElement = formElement.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove("form-message-success","form-message-error");
    messageElement.classList.add(`form-message-${type}`);
    console.log("Done");
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector("form-input-error-message").textContent = message;
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const signUpForm = document.querySelector("#signup");

    document.querySelector("#linkToCreateAccount").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        signUpForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkToLogin").addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        signUpForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        //Perform AJAX fetch login

        setFormMessage(loginForm, "error", "Invalid Credentials");
    });

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signUpUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be atleast 10 charactes in length");
            }
        })
    })
});