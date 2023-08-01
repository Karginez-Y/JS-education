'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json'); //method, URL, async, login, pass
    request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
    request.send(); //body для POST

    request.addEventListener('load', () => { //readystatechange
        if (request.status === 200) { //request.readyState === 4
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = `error code: ${request.status}`;
        }
    });
    // status
    // statusText
    // response
    // readyState


});