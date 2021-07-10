const form = document.querySelector('#myForm');
const submitButton = document.querySelector('#sendForm');

function validateForm(form) {
    let valid = true;

    if (!validateForm(form.elements.name)) {
        valid = false;
    }
    if (!validateForm(form.elements.phone)) {
        valid = false;
    }
    if (!validateForm(form.elements.comment)) {
        valid = false;
    }
    return valid;
}

function validate(element) {
    if (element.value.length < 1) {
        element.nextElementSibling.classList.add('form__error--active');
        element.nextElementSibling.textContent = 'Заполните это поле!';
        element.style.border = "3px solid red";
      return false;
    } else {
        element.nextElementSibling.textContent = '';
        element.nextElementSibling.classList.remove('form__error--active');
        element.style.border = "3px solid transparent";
      return true;
    };
  };

submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (validateForm(form)) {
        alert('Форма валидна, отправляем на сервер!');
    }
});