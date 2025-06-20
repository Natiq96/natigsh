const realFile = document.getElementById("realFile");
const customBtn = document.getElementById("customBtn");
const fileName = document.getElementById("fileName");

customBtn.addEventListener("click", function () {
    realFile.click();
});

realFile.addEventListener("change", function () {
    if (realFile.files.length > 0) {
        fileName.textContent = realFile.files[0].name;
    } else {
        fileName.textContent = "Heç bir fayl seçilməyib";
    }
});

const fullHeight = document.documentElement.scrollHeight;
const solidbar = document.getElementById("solidbar")
solidbar.style.height = fullHeight 

const menu = document.getElementById("menu")
const menuIcon = document.getElementById("menuIcon")
menu.addEventListener("click",function(e){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
    if (menuIcon.name === "close-circle-outline"){
        solidbar.style.display = "none"
        menuIcon.name = "menu-sharp"
    }
    else{
        solidbar.style.display = "flex"
        menuIcon.name = "close-circle-outline"
    }
})
