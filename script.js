// Variables
const form = document.getElementById('form');
const email = document.getElementById('email');
const submit = document.getElementById('btn');
let errorDisplay = document.getElementById('error');
// --- // 
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Functions and validations

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInput();
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInput = () => {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        errorDisplay.innerText = "Whoops! It looks like you forgot to add your email";
    } else if (!isValidEmail(emailValue)) {
        errorDisplay.innerText = "Please provide a valid email address";
    } else {
        errorDisplay.innerText = "Success, you have provided a valid email!"
    }
};

// arrow functions used/ but look up more clarification on it; they do work though. so... 



