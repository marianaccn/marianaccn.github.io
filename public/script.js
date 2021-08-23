//config vídeo 
var vid = document.getElementById("video");
vid.playbackRate = 0.6;

//config menu
const dropdownButton = document.getElementById("dropdown-button");
dropdownButton.addEventListener("click", function(){
const dropdownMenu = document.querySelector(".dropdown-content")
            
if (dropdownMenu.classList.contains("dropdown-content-inativo")){
    dropdownMenu.classList.remove("dropdown-content-inativo")
} else {
    dropdownMenu.classList.add("dropdown-content-inativo")
    }
});