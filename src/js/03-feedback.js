import throttle from "lodash.throttle";
const STORAGE_KEY = 'message';

const ref = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea')
}

populateTextMessage();

ref.form.addEventListener('input', throttle(onTextareaInput, 500));
ref.form.addEventListener('submit', onFormSubmit);

const { form, input, textarea } = ref;


function onTextareaInput() { 
 let feedbackForm  = {
  email: input.value,
  textarea: textarea.value
  };
 localStorage.setItem(STORAGE_KEY,JSON.stringify(feedbackForm))
}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
  
  const inputEmail = e.currentTarget.elements.email.value;
  const inputTextarea = textarea.value;

  const options = {
    email: inputEmail,
    textarea: inputTextarea,
  };
  
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextMessage() { 
  const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (saveData) { 
    input.value = saveData.email;
    textarea.value = saveData.textarea;
  }
}


//=================================
// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'message';

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     input: document.querySelector('.feedback-form input'),
//     textarea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// // refs.form.addEventListener('input', e => {
// //     FormData[e.target.name] = e.target.value;
// //     throttle(onTextareaInput, 500);
// //     localStorage.setItem(STORAGE_KEY,JSON.stringify(feedbackForm))
// // });

// populateTextMessage();

// function onFormSubmit(e) {
//     e.preventDefault();
//     e.currentTarget.reset();

//     localStorage.removeItem(STORAGE_KEY);
// };


// function onTextareaInput(e) {
//     const message = e.target.value;

//     localStorage.setItem(STORAGE_KEY, message);
// };

// function populateTextMessage() { 
//     const savedMessage = localStorage.getItem(STORAGE_KEY);

//     if (savedMessage) {
//         refs.textarea.value = savedMessage;
//     }
// };

