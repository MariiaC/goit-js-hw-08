import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {}//виводь у консоль об'єкт з полями email, message

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);
getForm();


function onFormInput(event) {
    // console.log(event.target.name);
    // console.log(event.target.value);

    formData[event.target.name] = event.target.value;
    // console.log(formData);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))

    // console.log(formData);

    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);
    console.log('parsedData', parsedData);
    
};

function onFormSubmit (event) {
    event.preventDefault();
    //console.log('send form');//перевірка чи перезавант при submit
    event.target.reset(); //очищуємо форму-інтерфейс(поля)
    localStorage.removeItem(STORAGE_KEY);//очищуємо локал сторедж
};

function getForm() {
    const savedMsg = localStorage.getItem(STORAGE_KEY);
    if (savedMsg) {
        formRef.value=savedMsg;//якщо є такий ключ, то збережеться у формі , в ін випадку -нул
    }

    // console.log(savedMsg);
};

