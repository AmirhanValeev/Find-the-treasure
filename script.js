let map = document.getElementById("map")
let steps = 0
let pirate = document.getElementById("pirate")
let treasureX = Math.random()*500
let treasureY = Math.random()*500
map.onclick = function(event){
    // console.log("я карта!","x:"+event.offsetX,"y:"+event.offsetY);
    let pirateX = event.offsetX-25
    let pirateY = event.offsetY-25
    pirate.style.left = pirateX+"px"
    pirate.style.top = pirateY+"px"
    steps = steps+1
    console.log(steps);
    // console.log(pirateX,pirateY);
}
// console.log(treasureX,treasureY);