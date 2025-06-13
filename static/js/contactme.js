const sendButton = document.getElementById("sendMsg");
const succesfulCon = document.getElementById("succesfulCon");
const nameIn = document.getElementById("nameInput");
const emailIn = document.getElementById("emailInput");
const txt = document.getElementById("text");

sendButton.addEventListener("click", function(e) {
    e.preventDefault();

    const lengthName = nameIn.value.trim().length;
    const emaillength = emailIn.value.trim().length;
    const txtlen = txt.value.trim().length;

    // Əgər input boşdursa, davam etmə
    if (lengthName === 0 || emaillength===0 || txtlen===0 || !emailIn.value.includes("@")) {
        alert("Zəhmət olmasa melumatlari düzgün daxil edin.");
        return;
    }

    succesfulCon.style.display = "flex";
    document.body.classList.add("modal-open"); 

    setTimeout(() => {
        succesfulCon.style.display = "none";
        document.body.classList.remove("modal-open");
    }, 3000);
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

