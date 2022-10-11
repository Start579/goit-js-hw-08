//*************************************************************
import throttle from 'lodash.throttle';

const formRef = document.querySelector(".feedback-form");
let localData = {};
//*************************************************************

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', formSubmit);

function formSubmit (event) {
  event.preventDefault();
localStorage.removeItem('feedback-form-state');
localData = {};
  const { elements: { email, message},
} = event.currentTarget;
if (email.value === "" || message.value === "") {
return alert("Заполните форму")
}

const userData = {
  email: email.value,
  message: message.value,
};
 console.log(userData);
  formRef.reset();
};

function onFormInput(event) {
  localData[event.target.name] = event.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(localData));    
};
function localDataParse () {
  const parseData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (parseData === null) {
    return;
  }

formRef[0].value = parseData.email || "";
formRef[1].value = parseData.message || "";
};
localDataParse ();