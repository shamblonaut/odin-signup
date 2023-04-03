let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm-password');
let submit = document.querySelector('button#create-account');
let form = document.querySelector('form');

submit.addEventListener('click', () => {
    if(password.value !== confirmPassword.value) {
        password.classList.add('error');
        password.parentElement.classList.add('error');
        confirmPassword.classList.add('error');
    }
    else {
        password.classList.remove('error');
        password.parentElement.classList.remove('error');
        confirmPassword.classList.remove('error');
        form.requestSubmit();
    }
});