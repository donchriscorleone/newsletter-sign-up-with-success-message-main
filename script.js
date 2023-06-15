const form = document.getElementById('form');
const formbtn = document.getElementById('form-button');
const email = document.getElementById('email');
const successEmail = document.getElementById('success-email');
const mainCard = document.getElementById('main-card');
const successCard = document.getElementById('success-card');

const dismissBtn = document.getElementById('btn-dismiss');

let isEmailValid = false;

formbtn.addEventListener('click' , (e) => {
    if (!isEmailValid) {
        email.classList.add('input-error');
        form.classList.add('form-error');

    } else {
        email.classList.remove('input-error');
        form.classList.remove('form-error');

        mainCard.classList.add('no-display');
        successCard.classList.remove('no-display');
        successEmail.innerText = email.value;
        email.value = "";
        isEmailValid = false;
    }

    e.preventDefault();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

dismissBtn.addEventListener('click', (e) => {
    mainCard.classList.remove('no-display');
    successCard.classList.add('no-display');
})

email.addEventListener('change', (e) => {
    email.value = e.target.value;

    isEmailValid = email.validity.valid && email.value !== '';
})

