const sapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=f35b728b9784b1eaf04baa7a3e381718&units=imperial";
const sapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=f35b728b9784b1eaf04baa7a3e381718";

fetch(sapiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        // -id Needs a #

        const temperature = document.querySelector('#temperature');
        //   it wouldn't work because it was weather not forcast in the url
        temperature.textContent = jsObject.current.temp;

        const humidity = document.querySelector('#humidity');
        humidity.textContent = jsObject.current.humidity + '%';

        const currentcond = document.querySelector('#currentcond');
        currentcond.textContent = jsObject.current.weather[0].description;

        const weatheralert = document.querySelector('#weatheralert');
        weatheralert.textContent = jsObject.alerts[0].event + "," + jsObject.alerts[1].event;
    });