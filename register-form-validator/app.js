var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');
var eye = document.querySelector('#eye');
var eyeSlash = document.querySelector('#eye-slash');
var passwordEye = document.querySelector('.password-eye');
var confirmPasswordEye = document.querySelector('.confirm-password-eye');

// all function
function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}

function showSucces(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(listInput) {
    listInput.forEach(input => {
        input.value = input.value.trim();
        if (!input.value) {
            showError(input, 'Không được để trống');
            return true;
        }
        showSucces(input);
    });
    return false;

}

function checkEmailError(input) {
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim();

    let isEmptyError = !regexEmail.test(input.value);
    if (regexEmail.test(input.value)) {
        showSucces(input);
    } else {
        showError(input, 'Email Invalid')
    }
    return isEmptyError;
}

function checkLengthError(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `Phải có ít nhất ${min} ký tự`);
        return true;
    }
    if (input.value.length > max) {
        showError(input, `Không được quá ${max} ký tự`);
        return true
    }
    showSucces(input);
    return false;
}

function checkMatchPasswordError(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'Mật khẩu không trùng khớp');
        return true;
    }
    return false;
}

function changeEyePassword(input, inputEye) {
    if (input.type === 'password') {
        input.type = "text"
        inputEye.children[0].classList.remove('hide');
        inputEye.children[1].classList.add('hide');
    } else {
        input.type = "password"
        inputEye.children[0].classList.add('hide');
        inputEye.children[1].classList.remove('hide');
    }
}
// action eye password
passwordEye.addEventListener('click', function () {
    changeEyePassword(password, this);
});
confirmPasswordEye.addEventListener('click', function () {
    changeEyePassword(confirmPassword, this);
});

// form action
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    let isEmailError = checkEmailError(email);
    let isUsernameLengthError = checkLengthError(username, 3, 10);
    let isMatchError = checkMatchPasswordError(password, confirmPassword);
    if (isEmptyError || isEmailError || isUsernameLengthError || isMatchError) {
        // do nothing
    } else {
        //logic,callApi,...
        alert("Đăng ký thành công");
    }
});