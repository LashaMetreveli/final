const getBtn = document.getElementById('get-btn');


const sendHttpRequest = (method, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    
    xhr.responseType = 'json';

    xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
    };
    
    
    xhr.send();
};

const getData = () => {
   sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/users');
};


const sendData = () => {

};

getBtn.addEventListener('click', getData);


