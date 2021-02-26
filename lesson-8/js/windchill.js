function windChill(temp, speed) {

    let chill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
    /*chill =(Math.round(chill)*100)/100;
    console.log(chill);*/
    return chill.toFixed(0);
}