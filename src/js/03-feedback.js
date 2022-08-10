import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let formData = {}//виводь у консоль об'єкт з полями email, message
formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);
restoreFormData();


function onFormInput(event) { 
    //  console.log(event.target);
    //  console.log(formData);
    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))

    // console.log(formData);
};

function onFormSubmit (event) {
    event.preventDefault();
    //console.log('send form');//перевірка чи перезавант при submit
    formRef.reset(); //очищуємо форму-інтерфейс(поля)
    localStorage.removeItem(STORAGE_KEY);//очищуємо локал сторедж
    console.log(formData);
    formData = {}; //очищуємо обєкт
};

//считали первинні значення
function restoreFormData() {

    const savedMsg = localStorage.getItem(STORAGE_KEY);
  
    if (savedMsg) {
        formData = JSON.parse(savedMsg);
    //console.log(formData);
        formRef.email.value = formData.email || '';
        formRef.message.value = formData.message || '';

        // formRef.value=savedMsg;//якщо є такий ключ, то збережеться у формі , в ін випадку -нул
    }
    // console.log(formRef.email.value);
    // console.log(formRef.message.value);
    // console.log(savedMsg);
};

