const sendButton = document.getElementById("sendMsg");
const succesfulCon = document.getElementById("succesfulCon");
const emailIn = document.getElementById("emailInput");
const passwordIn = document.getElementById("passwordInput1");

sendButton.addEventListener("click", function(e) {
    e.preventDefault();

    const emailValue = emailIn.value.trim();
    const passwordValue = passwordIn.value.trim();

    if (
        emailValue.length === 0 ||
        passwordValue.length === 0 ||
        !emailValue.includes("@")
    ) {
        alert("Zəhmət olmasa məlumatları düzgün daxil edin.");
        return;
    }

    succesfulCon.style.display = "flex";
    document.body.classList.add("modal-open");

    setTimeout(() => {
        succesfulCon.style.display = "none";
        document.body.classList.remove("modal-open");
    }, 3000);
});
