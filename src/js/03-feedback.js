var throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const messageRef = formRef.querySelector('textarea[name="message"]');
const emailRef = formRef.querySelector('input[name="email"]');

checkStorage();
const formData = {};

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', onTextareaInput);

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function checkStorage() {
  const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedMessage) {
    emailRef.value = savedMessage.email;
    messageRef.value = savedMessage.message;
  }
}
