const sendButton = document.getElementById("sendMsg");
const succesfulCon = document.getElementById("succesfulCon");
const ps1 = document.getElementById("passwordInput2");
const ps2 = document.getElementById("passwordInput1");
const emailIn = document.getElementById("eamilIn");

sendButton.addEventListener("click", function(e) {
    e.preventDefault();

    const ps1Value = ps1.value.trim();
    const ps2Value = ps2.value.trim();
    const emailValue = emailIn.value.trim();

    if (
        ps1Value.length === 0 ||
        ps2Value.length === 0 ||
        emailValue.length === 0 ||
        !emailValue.includes("@")
    ) {
        alert("Zəhmət olmasa bütün məlumatları düzgün daxil edin.");
        return;
    }

    if (ps1Value !== ps2Value) {
        alert("Şifrələr eyni deyil.");
        return;
    }

    succesfulCon.style.display = "flex";
    document.body.classList.add("modal-open");

    setTimeout(() => {
        succesfulCon.style.display = "none";
        document.body.classList.remove("modal-open");
    }, 3000);
});
