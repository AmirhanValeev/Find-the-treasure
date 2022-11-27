let map = document.getElementById("map")
let Clad = document.getElementById("Clad")
let steps = 0
let pirate = document.getElementById("pirate")
let treasureX = Math.random() * 500
let h1 = document.getElementById("h1")
let treasureY = Math.random() * 500
let Newgame = document.getElementById("Newgame")
let h3 = document.getElementById("h3")
h1.onclick = function (event) {
    if (treasureX > 250) {
        h1.innerHTML = "right"
    }
    else {
        h1.innerHTML = "left"
    } 
}
// pirate.style.top = 250 + "px"
// pirate.style.left = 400 + "px"
Newgame.onclick = function (event) {
    console.log("Я пират");
    pirate.style.left = 70 + "px"
    pirate.style.top = 0 + "px"
    Clad.style.opacity = 0
    Clad.style.transform = "scale(1) rotate(0deg)"
    h3.innerHTML = "Good luck!"
    map.style.pointerEvents = "auto"
    treasureX = Math.random() * 500
    treasureY = Math.random() * 500
    steps = 0
}
map.onclick = function (event) {
    // offsetX - это Х  мышки
    let pirateX = event.offsetX - 25
    let pirateY = event.offsetY - 25
    pirate.style.left = pirateX + "px"
    pirate.style.top = pirateY + "px"
    let x = treasureX - pirateX;
    let y = treasureY - pirateY;
    // формула теоремы Пифагора
    let distance = Math.sqrt(x * x + y * y);
    h3.innerHTML = "Hot"
    steps = steps + 1
    console.log(distance);
    if (distance < 10) {
        h3.innerHTML = "You found a treasure it took " + steps + " steps"
        Clad.style.opacity = 1
        Clad.style.transform = "scale(5) rotate(1080deg)"
        map.style.pointerEvents = "none"
    }
    else if(distance < 20){
        h3.innerHTML = "Boiling lava"
    }
    else if(distance < 30){
        h3.innerHTML = "Fire"
    }
    else if(distance < 40){
        h3.innerHTML = "Hot water"
    }
    else if(distance < 50){
        h3.innerHTML = "Hot springs"
    }
    else if(distance < 100){
        h3.innerHTML = "Warm"
    }
    else if(distance < 150){
        h3.innerHTML = "Windy"
    }
    else if(distance < 200){
        h3.innerHTML = "Ice"
    }
    else if(distance < 250){
        h3.innerHTML = "Ice age"
    }
    else{
        h3.innerHTML = "The coldest place"
    }
    // console.log(pirateX,pirateY);
}

// console.log(treasureX,treasureY);
// Fire 
// Hot water 
// Hot springs
// Warm 
// Windy
// Ice 
// Ice age 
console.log(treasureX,treasureY);