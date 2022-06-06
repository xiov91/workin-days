const nineSave = document.getElementById('0900save');
const tenSave = document.getElementById('1000save');
const elevenSave = document.getElementById('1100save');
const twelveSave = document.getElementById('1200save');
const oneSave = document.getElementById('1300save');
const twoSave = document.getElementById('1400save');
const threeSave = document.getElementById('1500save');
const fourSave = document.getElementById('1600save');
const fiveSave = document.getElementById('1700save');

// display date in #currentDay
var today = moment().format('LL');
$("#currentDay").text(today);



//change color based on hour

//button to save to local storage



nineSave.addEventListener("click", function() {
    localStorage.setItem("#9time", "#0900.value")
});
tenSave.addEventListener("click", function() {
    localStorage.setItem("#10time", "#1000.value")
});
elevenSave.addEventListener("click", function() {
    localStorage.setItem("#11time", "#1100.value")
});
twelveSave.addEventListener("click", function() {
    localStorage.setItem("#12time", "#1200.value")
});
oneSave.addEventListener("click", function() {
    localStorage.setItem("#13time", "#1300.value")
});
twoSave.addEventListener("click", function() {
    localStorage.setItem("#14time", "#1400.value")
});
threeSave.addEventListener("click", function() {
    localStorage.setItem("#15time", "#1500.value")
});
fourSave.addEventListener("click", function() {
    localStorage.setItem("#16time", "#1600.value")
});
fiveSave.addEventListener("click", function() {
    localStorage.setItem("#17time", "#1700.value")
});