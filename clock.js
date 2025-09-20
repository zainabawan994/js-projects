/*setInterval(myfun, 1000);

function myfun() {
    let date = new Date(); // Create a new Date object
    let time = date.toLocaleTimeString(); // Get the current time as a string
    document.getElementById("clock").innerHTML = time; // Display time in the clock div
}*/
setInterval(myWeb,1000);

function myWeb(){
    let date= new Date();
    let set=date.toLocaleTimeString();
    document.getElementById("clock").innerHTML=set;
}