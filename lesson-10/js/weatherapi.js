// const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=1c63b29616f73119eb969c661944c844&units=imperial';
// fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log(jsObject);
//     const currentTemp = document.querySelector('#current-temp');
//     currentTemp.textContent = jsObject.list[0].main.temp;
//     // const imagesrc = `https://openweathermap.org/img/w/$jsObject.weather[0].icon)`;
//     const fiveday = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
//     console.log(fiveday);
//     console.log(fiveday[1].main);



//     // document.getElementById('current-temp').textContent = jsObject.main.temp;
//     const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png'; // note the concatenation
//     console.log(imagesrc);
//     const desc = jsObject.weather[0].description; // note how we reference the weather array
//     document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
//     document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
//     document.getElementById('icon').setAttribute('alt', desc);


//fish haven
// const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.0369&lon=-111.3963&appid=5aa9a97658cd372399c4ff0e81b82f97';
//sodasprings 
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?lat=42.6543652&lon=-111.6046687&appid=5aa9a97658cd372399c4ff0e81b82f97';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });