let [miliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
let timeReference = document.querySelector('.timer_display')
let int = null

document.getElementById('start_timer').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int)
    }

    int = setInterval(displayTimer, 10)
})

document.getElementById('pause_timer').addEventListener('click', () => {
    clearInterval(int)
})

document.getElementById('reset_timer').addEventListener('click', () => {
    clearInterval(int)
    timeReference.innerHTML = '00 : 00: 00: 000'
})

function displayTimer() {
    miliseconds += 10
    if (miliseconds == 1000) {
        miliseconds = 0
        seconds++
        if (seconds == 60) {
            seconds = 0
                minutes++
            if (minutes == 60) {
                minutes = 0
                hours++
            }
        }
    }

    let h = hours < 10 ? '0' + hours : hours
    let m = minutes < 10 ? '0' + minutes : minutes
    let s = seconds < 10 ? '0' + seconds : seconds
    let ms = miliseconds < 10 ? '00' + miliseconds : miliseconds < 100 ? '0' + miliseconds : miliseconds

    timeReference.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}