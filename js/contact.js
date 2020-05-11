// Declaring all the variables:
const form = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const firstNameErrorIcon = document.querySelector("#firstNameErrorIcon");
let firstNameHasError = false;

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const lastNameErrorIcon = document.querySelector("#lastNameErrorIcon");
let lastNameHasError = false;

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const emailErrorIcon = document.querySelector("#emailErrorIcon");
let emailHasError = false;

const topic = document.querySelector("#topic");
const topicError = document.querySelector("#topicError");
const topicErrorIcon = document.querySelector("#topicErrorIcon");
let topicHasError = false;

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const messageErrorIcon = document.querySelector("#messageErrorIcon");
let messageHasError = false;

const submitMessage = document.querySelector("#submitMessage");

// Eventlistner
form.addEventListener("submit", validateForm);

// Function to validate the contact form
function validateForm() {
    event.preventDefault();

    // First name:
    const firstNameValue = firstName.value;

    if (validateLength(firstNameValue, 1) === true) {
        firstNameError.style.display = "none";
        firstNameErrorIcon.style.display = "none";
        firstNameHasError = false;
    } else {
        firstNameError.style.display = "block";
        firstNameErrorIcon.style.display = "inline-block";
        firstNameHasError = true;
    }

    // Last name:
    const lastNameValue = lastName.value;

    if (validateLength(lastNameValue, 1) === true) {
        lastNameError.style.display = "none";
        lastNameErrorIcon.style.display = "none";
        lastNameHasError = false;
    } else {
        lastNameError.style.display = "block";
        lastNameErrorIcon.style.display = "inline-block";
        lastNameHasError = true;
    }

    // Email:
    const emailValue = email.value;

    if (validateEmail(emailValue) === true) {
        emailError.style.display = "none";
        emailErrorIcon.style.display = "none";
        emailHasError = false;
    } else {
        emailError.style.display = "block";
        emailErrorIcon.style.display = "inline-block";
        emailHasError = true;
    }

    // Topic:
    const topicValue = topic.value;

    if (validateLength(topicValue, 1) === true) {
        topicError.style.display = "none";
        topicErrorIcon.style.display = "none";
        topicHasError = false;
    } else {
        topicError.style.display = "block";
        topicErrorIcon.style.display = "inline-block";
        topicHasError = true;
    }

    // Message:
    const messageValue = message.value;

    if (validateLength(messageValue, 6) === true) {
        messageError.style.display = "none";
        messageErrorIcon.style.display = "none";
        messageHasError = false;
    } else {
        messageError.style.display = "block";
        messageErrorIcon.style.display = "inline-block";
        messageHasError = true;
    }

    // Submitt Message:
    if (firstNameHasError === true || 
        lastNameHasError === true || 
        emailHasError === true ||
        topicHasError === true ||
        messageHasError === true) {
            submitMessage.style.display = "none";
        } else {
            submitMessage.style.display = "block";
        }
}

// Validate the lenght
function validateLength(value, lenghtToCheck) {
    const trimmedValue = value.trim();

    if (trimmedValue.length >= lenghtToCheck) {
        return true;
    } else {
        return false;
    }
}

// Validate email address
function validateEmail(emailValue) {
    const regEx = /\S+@\S+\.\S+/;

    if (regEx.test(emailValue)) {
        return true;
    } else {
        return false;
    }
}