function windChill(temp, speed) {

    let chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    /*chill =(Math.round(chill)*100)/100;
    console.log(chill);*/
    return chill.toFixed(0);
}

/****************************************************************** */
window.addEventListener('load', (event) => {
    // add code here to run when page loads
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('.navigationBar')

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('responsive')
    }, false);

    // To solve the mid resizing issue with responsive class on
    window.onresize = () => {
        if (window.innerWidth > 760) mainnav.classList.remove('responsive')
    };

    const cd = document.querySelector('#currentDate');
    cd.textContent = new Date().toDateString();

    const cry = document.querySelector('#copyrightyear');
    cry.textContent = new Date().getFullYear();

})

const townURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(townURL)
    .then(function(response) {
        return response.json();

    })
    .then(function(jsonObject) {
        console.log(jsonObject);
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston") {
                for (x = 0; x < towns[i].events.length; x++) {
                    let ssevent = document.createElement('p');

                    ssevent.textContent = towns[i].events[x];

                    document.querySelector('.ssevents').appendChild(ssevent);

                };
            };
        };
    });

const sodaURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=f35b728b9784b1eaf04baa7a3e381718&units=imperial";
const sodaforecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=f35b728b9784b1eaf04baa7a3e381718";

fetch(sodaURL)
    .then(function(response) {
        return response.json();
    })

.then(function(jsonObject) {
    console.log(jsonObject);
    const stations = jsonObject;
    let ss = document.createElement('section');
    let sscurr = document.createElement('h3');
    let sshumid = document.createElement('h3');
    let sswinds = document.createElement('h3');
    let ssmaxTemp = document.createElement('h3');
    let ssimage = document.createElement('img');

    sscurr.textContent = "Currently: " + stations.weather[0].main;
    sshumid.textContent = "Humidity: " + stations.main.humidity;
    sswinds.textContent = "Wind Speed: " + stations.wind.speed + "MPH";
    ssmaxTemp.textContent = "Temperature: " + Math.round(stations.main.temp_max) + '°';

    ss.appendChild(sscurr);
    ss.appendChild(ssmaxTemp);
    ss.appendChild(sshumid);
    ss.appendChild(sswinds);
    ss.appendChild(ssimage);


    ssimage.setAttribute('src', 'https://openweathermap.org/img/w/' + stations.weather[0].icon + '.png');

    document.querySelector('.ssprings').appendChild(ss);
});

fetch(sodaforecastURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.log(jsonObject);
        const stations = jsonObject;
        const idCount = 0;
        for (i = 0; i < stations.list.length; i++) {
            if (stations.list[i].dt_txt.includes("18:00:00")) {
                let spring2 = document.createElement('section');
                let spring3 = document.createElement('section');
                let spring4 = document.createElement('section');
                let spring5 = document.createElement('h2');
                let spring6 = document.createElement('h2');
                let springimage = document.createElement('img');

                var days = ['Sunday', 'Monday', 'Tuesday',
                    'Wednesday', 'Thursday', 'Friday', 'Saturday'
                ];
                var month = stations.list[i].dt_txt.substr(5, 2);
                var date = stations.list[i].dt_txt.substr(8, 2);
                var d = new Date(2020, month, date);
                if (d.getDay() + 5 > 6) {
                    var newD = d.getDay() + 5 - 7;
                } else {
                    var newD = d.getDay() + 5;
                }

                spring5.textContent = Math.round((stations.list[i].main.temp_max - 273.15) * (9 / 5) + 32) + "°";
                spring6.textContent = days[newD];

                springimage.setAttribute('src', 'https://openweathermap.org/img/w/' + stations.list[i].weather[0].icon + '.png');
                springimage.setAttribute('alt', stations.list[i].weather[0].icon + '.png');


                spring2.appendChild(spring5);
                spring3.appendChild(spring6);
                spring4.appendChild(springimage);

                document.querySelector('.ssdays').appendChild(spring3);
                document.querySelector('.sstemps').appendChild(spring2);
                document.querySelector('.ssicons').appendChild(spring4);
            }
        }
    });