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
            if (towns[i].name == "Fish Haven") {
                for (x = 0; x < towns[i].events.length; x++) {
                    let fevent = document.createElement('p');

                    fevent.textContent = towns[i].events[x];

                    document.querySelector('.fhevents').appendChild(fevent);

                };
            };
        };
    });

const fhURL = "https://api.openweathermap.org/data/2.5/weather?id=5585000&appid=f35b728b9784b1eaf04baa7a3e381718&units=imperial";
const fhforecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585000&appid=f35b728b9784b1eaf04baa7a3e381718";

fetch(fhURL)
    .then(function(response) {
        return response.json();
    })

.then(function(jsonObject) {
    console.log(jsonObject);
    const stations = jsonObject;
    let fvn = document.createElement('section');
    let fhcurr = document.createElement('h3');
    let fhhumid = document.createElement('h3');
    let fhwinds = document.createElement('h3');
    let fhmaxTemp = document.createElement('h3');
    let fhimage = document.createElement('img');

    fhcurr.textContent = "Currently: " + stations.weather[0].main;
    fhhumid.textContent = "Humidity: " + stations.main.humidity;
    fhwinds.textContent = "Wind Speed: " + stations.wind.speed + "MPH";
    fhmaxTemp.textContent = "Temperature: " + Math.round(stations.main.temp_max) + '°';

    fvn.appendChild(fhcurr);
    fvn.appendChild(fhmaxTemp);
    fvn.appendChild(fhhumid);
    fvn.appendChild(fhwinds);
    fvn.appendChild(fhimage);


    fhimage.setAttribute('src', 'https://openweathermap.org/img/w/' + stations.weather[0].icon + '.png');

    document.querySelector('.fhaven').appendChild(fvn);
});

fetch(fhforecastURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.log(jsonObject);
        const stations = jsonObject;
        const idCount = 0;
        for (i = 0; i < stations.list.length; i++) {
            if (stations.list[i].dt_txt.includes("18:00:00")) {
                let fvn2 = document.createElement('section');
                let fvn3 = document.createElement('section');
                let fvn4 = document.createElement('section');
                let fvn5 = document.createElement('h2');
                let fvn6 = document.createElement('h2');
                let fvnimage = document.createElement('img');

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

                fvn5.textContent = Math.round((stations.list[i].main.temp_max - 273.15) * (9 / 5) + 32) + "°";
                fvn6.textContent = days[newD];

                fvnimage.setAttribute('src', 'https://openweathermap.org/img/w/' + stations.list[i].weather[0].icon + '.png');
                fvnimage.setAttribute('alt', stations.list[i].weather[0].icon + '.png');

                fvn2.appendChild(fvn5);
                fvn3.appendChild(fvn6);
                fvn4.appendChild(fvnimage);

                document.querySelector('.fhdays').appendChild(fvn3);
                document.querySelector('.fhtemps').appendChild(fvn2);
                document.querySelector('.fhicons').appendChild(fvn4);
            }
        }
    });