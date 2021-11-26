//var menu = document.getElementsByClassName("menu");
var ham = document.getElementById("ham");
var xIcon = document.getElementById("xIcon");
var visMeny = false;

let menuActive = false;
console.log("meny active: " + menuActive);
console.log("show menu");

function toggleMenu() {
    if (!visMeny){
        console.log("Trykket 1");
        document.getElementById("ham").style.display="none";
        document.getElementById("xIcon").style.display="block";
        document.getElementById("menu").classList.toggle("showMenu");
        visMeny = !visMeny;
    } else{
        console.log("Trykket 2");
        document.getElementById("ham").style.display="block";
        document.getElementById("xIcon").style.display="none";
        document.getElementById("menu").classList.toggle("showMenu");
        visMeny = !visMeny;
    }

}

// window.addEventListener("scroll", function(){
//     var nav = this.document.querySelector("nav")
//     nav.classList.toggle("sticky", window.scrollY > 0);
// })