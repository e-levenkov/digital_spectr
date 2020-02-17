import './styles/feedback-form.scss'
import './styles/validation.scss'


const form = document.querySelector('.feedback-form')
const username = document.querySelector('.feedback-form__input_name');
const phone = document.querySelector('.feedback-form__input_tel');
const email = document.querySelector('.feedback-form__input_email');
var errorArray = [];


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
    errorArray.push(`Error: ${message}`)
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isName(username) {
    return /(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/.test(username)
}

function isPhone(phone) {
    return /(^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$)/.test(phone)
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


function checkInputs() {

    const usernameValue = username.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Данное поле не может быть пустым');
    } else if (!isName(usernameValue)) {
        setErrorFor(username, 'Доступны только русские буквы, пробелы, тире');
    } else {
        setSuccessFor(username);
    }


    if (phoneValue === '') {
        setErrorFor(phone, 'Данное поле не может быть пустым');
    } else if (!isPhone(phoneValue)) {
        setErrorFor(phone, 'Введено некоректное значение');
    } else {
        setSuccessFor(phone);
    }


    if (emailValue === '') {
        setErrorFor(email, 'Данное поле не может быть пустым');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Введено некоректное значени');
    } else {
        setSuccessFor(email);
    }

}


const ajaxSend = (formData) => {
    fetch('https://digital-spectr.com/ac/academy.php', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.text())
        .then(json => console.log(json))
        .catch((error) => {
            console.log(error)
        })

};




form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkInputs(); // валидируем инпуты

    if (errorArray.length == 0) { // если все инпуты прошли валидацию, то отправляем запрос
        console.log('request send')
        let formData = new FormData(this);
        formData = Object.fromEntries(formData);

        ajaxSend(formData);
        this.reset();
    }
    else {
        console.log('request not send')
        errorArray.splice(0, errorArray.length); // чистим массив с ошибками, чтобы срабатывал if, для отправки следующего запроса
    }
});

