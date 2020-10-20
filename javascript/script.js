function realtimeClock() {
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

    var amPm = (hours < 12) ? "AM" : "PM";

    var time;
    if (hours < 12) {
        time = "morning";
    } else if (hours > 12) {
        time = "afternoon";
    } else if (hours > 4) {
        time = "evening";
    } else if (hours > 7) {
        time = "night";
    }

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.getElementById('clock').innerHTML = hours + " : " + minutes + " " + amPm;
    var t = setTimeout(realtimeClock, 500);

    document.getElementById('when').innerHTML = "Good " + time + ", " + "Rama.";


}