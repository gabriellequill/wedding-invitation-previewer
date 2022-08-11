const inputTarget = document.getElementById ('details');

const showDetails = document.getElementsByClassName ('details');
const showDate = document.getElementsByClassName ('date');
const showTime = document.getElementsByClassName ('time');
const showLocation = document.getElementsByClassName ('location');

inputTarget.addEventListener ('keyup', displayInputValue);

function displayInputValue () {
    console.log (inputTarget.value)
    showDetails[0].innerHTML = inputTarget.value
    showDate[1].innerHTML = inputTarget.value
    showTime[2].innerHTML=inputTarget.value
    showLocation[3].innerHTML = inputTarget.value
}

