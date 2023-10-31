 var icon = document.getElementById("icon");
 var galleryContainer = document.getElementById("gallery-container")

 icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if ( document.body.classList.contains("dark-theme")) {
        icon.src ="image/sun.png";
    } else {
        icon.src = "image/moon.png";

    }
 }

galleryContainer.className = 'hidden';

window.addEventListener("load", (event) => {
galleryContainer.className = 'visible';
});
