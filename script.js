const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const submitButton = document.querySelector('button#submit');
const form = document.querySelector('form');
const passwordContainer = document.querySelector('.input.password');

submitButton.addEventListener('click', () => {
    if(password.value !== confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        passwordContainer.classList.add('error');
    } else {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        passwordContainer.classList.remove('error');
        form.requestSubmit();
    }
});