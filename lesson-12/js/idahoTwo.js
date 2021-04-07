const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=f35b728b9784b1eaf04baa7a3e381718&units=imperial";
// use the fetch ()
fetch(apiURL)
    .then((response) => response.json())
    .then((jsFullObject) => { //jsObject was changed to jsFullObject to save on edits
        console.log(jsFullObject); //jsObject was changed to jsFullObject to save on edits

        /////////////// jsObject will get the filtered data from jsFullObject
        const jsObject = jsFullObject;

        // -id Needs a #

        const day1temp = document.querySelector('#day1temp');
        day1temp.textContent = Math.round(jsObject.daily[0].temp.day) + " F" + "\xB0";
        const day2temp = document.querySelector('#day2temp');
        day2temp.textContent = Math.round(jsObject.daily[1].temp.day) + " F" + "\xB0";
        const day3temp = document.querySelector('#day3temp');
        day3temp.textContent = Math.round(jsObject.daily[2].temp.day) + " F" + "\xB0";


        ////////////////////////////////////////////////////daily[0].weather[0].icon

        const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.daily[0].weather[0].icon + '.png'; // note the concatenation
        const desc1 = jsObject.daily[0].weather[0].description; // note how we reference the weather array
        // document.getElementById('imagesrc1').textContent = imagesrc1;  // informational specification only
        document.getElementById('icon1').setAttribute('src', imagesrc1); // focus on the setAttribute() method
        document.getElementById('icon1').setAttribute('alt', desc1);

        const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.daily[1].weather[0].icon + '.png'; // note the concatenation
        const desc2 = jsObject.daily[1].weather[0].description; // note how we reference the weather array
        // document.getElementById('imagesrc2').textContent = imagesrc2;  // informational specification only
        document.getElementById('icon2').setAttribute('src', imagesrc2); // focus on the setAttribute() method
        document.getElementById('icon2').setAttribute('alt', desc2);

        const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.daily[2].weather[0].icon + '.png'; // note the concatenation
        const desc3 = jsObject.daily[2].weather[0].description; // note how we reference the weather array
        // document.getElementById('imagesrc2').textContent = imagesrc2;  // informational specification only
        document.getElementById('icon3').setAttribute('src', imagesrc3); // focus on the setAttribute() method
        document.getElementById('icon3').setAttribute('alt', desc3);




        const daydesc1 = document.querySelector('#daydesc1');
        daydesc1.textContent = jsObject.daily[0].weather[0].description;

        const daydesc2 = document.querySelector('#daydesc2');
        daydesc2.textContent = jsObject.daily[1].weather[0].description;

        constdaydesc3 = document.querySelector('#daydesc3');
        daydesc3.textContent = jsObject.daily[2].weather[0].description;


        // multiply the time stamp by 1000 to make it readable

        const weekday = new Date(jsObject.daily[1].dt * 1000);
        const i = weekday.getDay();
        console.log(i)
        const dayTitle = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        //let day = 0

        if (i === 0) {
            nextdate = "Sunday";
        } else if (i === 1) {
            nextdate = "Monday";
        } else if (i === 2) {
            nextdate = "Tuesday";
        } else if (i === 3) {
            nextdate = "Wednesday";
        } else if (i === 4) {
            nextdate = "Thursday";
        } else if (i === 5) {
            nextdate = "Friday";
        } else if (i === 6) {
            nextdate = "Saturday";
        }

        document.getElementById("sdate1").innerHTML = nextdate;

        const weekday2 = new Date(jsObject.daily[2].dt * 1000);
        const i1 = weekday2.getDay();
        // console.log(i)
        const dayTitle1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        //let day = 0

        if (i1 === 0) {
            nextdate2 = "Sunday";
        } else if (i1 === 1) {
            nextdate2 = "Monday";
        } else if (i1 === 2) {
            nextdate2 = "Tuesday";
        } else if (i1 === 3) {
            nextdate2 = "Wednesday";
        } else if (i1 === 4) {
            nextdate2 = "Thursday";
        } else if (i1 === 5) {
            nextdate2 = "Friday";
        } else if (i1 === 6) {
            nextdate2 = "Saturday";
        }

        document.getElementById("sdate2").innerHTML = nextdate2;


        //  day 3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

        const weekday3 = new Date(jsObject.daily[3].dt * 1000);
        const i2 = weekday3.getDay();
        //  console.log(i)
        const dayTitle2 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        //let day = 0

        if (i2 === 0) {
            nextdate3 = "Sunday";
        } else if (i2 === 1) {
            nextdate3 = "Monday";
        } else if (i2 === 2) {
            nextdate3 = "Tuesday";
        } else if (i2 === 3) {
            nextdate3 = "Wednesday";
        } else if (i2 === 4) {
            nextdate3 = "Thursday";
        } else if (i2 === 5) {
            nextdate3 = "Friday";
        } else if (i2 === 6) {
            nextdate3 = "Saturday";
        }

        document.getElementById("sdate3").innerHTML = nextdate3;


        ///////////////////////////////////////////////////////////






    });