let [milliseconds, seconds, minutes] = [0, 0, 0]
let timeRef = document.getElementById("timer")
let int = null

document.getElementById("start-button").addEventListener("click", () => {
    if(int != null){
        clearInterval(null)
    }
    int = setInterval(displayTimer, 10);
    document.getElementById("start-button").disabled = true
    document.getElementById("stop-button").disabled = false
    document.getElementById("reset-button").disabled = true
});

document.getElementById("stop-button").addEventListener("click", () => {
    clearInterval(int);
    document.getElementById("start-button").disabled = false
    document.getElementById("stop-button").disabled = true
    document.getElementById("reset-button").disabled = false
})

document.getElementById("reset-button").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes] = [0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 000"
    document.getElementById("reset-button").disabled = false
})

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000) {
        milliseconds = 0
        seconds ++;
        if(seconds == 60) {
            seconds = 0
            minutes++
            if(minutes == 60) {
                minutes = 0;
                seconds++
            }
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
        milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timeRef.innerHTML = `${m} : ${s} : ${ms}`
}

