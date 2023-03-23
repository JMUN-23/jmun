const day = document.querySelector(".day .numb");
const hour = document.querySelector(".hour .numb");
const min = document.querySelector(".min .numb");
const sec = document.querySelector(".sec .numb");
var timer = setInterval(() => {
    var currentDate = new Date().getTime();
    var launchDate = new Date('July 28, 2023 00:00:00').getTime();
    var duration = launchDate - currentDate;
    var days = Math.floor(duration / (1000 * 60 * 60 * 24));
    var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((duration % (1000 * 60)) / 1000);
    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = minutes;
    sec.innerHTML = seconds;
    if (days < 10) {
        day.innerHTML = '0' + days;
    }
    if (hours < 10) {
        hour.innerHTML = '0' + hours;
    }
    if (minutes < 10) {
        min.innerHTML = '0' + minutes;
    }
    if (seconds < 10) {
        sec.innerHTML = '0' + seconds;
    }
    if (duration < 0) {
        clearInterval(timer);
    }
}, 1000);

const resday = document.querySelector(".resday .resnumb");
const reshour = document.querySelector(".reshour .resnumb");
const resmin = document.querySelector(".resmin .resnumb");
const ressec = document.querySelector(".ressec .resnumb");
var restimer = setInterval(() => {
    var rescurrentDate = new Date().getTime();
    var reslaunchDate = new Date('Jun 1, 2023 00:00:00').getTime();
    var resduration = reslaunchDate - rescurrentDate;
    var resdays = Math.floor(resduration / (1000 * 60 * 60 * 24));
    var reshours = Math.floor((resduration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var resminutes = Math.floor((resduration % (1000 * 60 * 60)) / (1000 * 60));
    var resseconds = Math.floor((resduration % (1000 * 60)) / 1000);
    resday.innerHTML = resdays;
    reshour.innerHTML = reshours;
    resmin.innerHTML = resminutes;
    ressec.innerHTML = resseconds;
    if (resdays < 10) {
        resday.innerHTML = '0' + resdays;
    }
    if (reshours < 10) {
        reshour.innerHTML = '0' + reshours;
    }
    if (resminutes < 10) {
        resmin.innerHTML = '0' + resminutes;
    }
    if (resseconds < 10) {
        ressec.innerHTML = '0' + resseconds;
    }
    if (resduration < 0) {
        clearInterval(restimer);
    }
}, 1000);