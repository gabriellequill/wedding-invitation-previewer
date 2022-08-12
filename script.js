function version1 (){
    document.getElementById ('concepts').src="Wedding_invite_plain.jpg";
    document.getElementById ('responses1').style.fontFamily = 'mySecondFont';
}

function version2 (){
    document.getElementById ('concepts').src="Wedding_invite_rose.jpg";
    document.getElementById ('responses2').style.fontFamily = 'myThirdFont';
}

function version3 (){
    document.getElementById ('concepts').src="Wedding_invite_art_deco.jpg";
    document.getElementById ('responses3').style.fontFamily = 'myFourthFont';
}

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

