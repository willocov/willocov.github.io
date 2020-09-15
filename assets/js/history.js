//Changing banner image periodically
var banner = document.getElementById("One");
var images=[
    "../images/trout.jpg",
    "../images/ohtani.jpg"
];

function change(){
    //myMood.src= images.reverse()[0];
    banner.style.backgroundImage = images.reverse()[0];
}

setInterval(change,5000); 