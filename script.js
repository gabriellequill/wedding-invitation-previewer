const img = document.getElementById('image')
console.log(img)
const btn1 = document.getElementById('minimalist')
const btn2 = document.getElementById('rose')
const btn3 = document.getElementById('vintage')
btn1.addEventListener('click', showMinimalist)
btn2.addEventListener('click', showRose)
btn3.addEventListener('click', showVintage)

function showMinimalist() {
    img.className = 'minimalist'   
}
 function showRose() {
    img.className = 'rose'
 }
 function showVintage() {
    img.className = 'vintage'
 }

const showDetails = document.getElementById('details');
const showDate = document.getElementById('date');
const showTime = document.getElementById('time');
const showLocation = document.getElementById('location');
const showDetails1 = document.getElementById('details1');
const showDate1 = document.getElementById('date1');
const showTime1 = document.getElementById('time1');
const showLocation1 = document.getElementById('location1');

showDetails.addEventListener ('keyup', displayDetails);
showDate.addEventListener ('keyup', displayDate);
showTime.addEventListener ('keyup', displayTime);
showLocation.addEventListener ('keyup', displayLocation);

function displayDetails (e) {
    showDetails1.innerText = e.target.value
}
function displayDate (e) {
    showDate1.innerText = e.target.value
}
function displayTime (e) {
    showTime1.innerText = e.target.value
}
function displayLocation (e) {
    showLocation1.innerText = e.target.value
}

