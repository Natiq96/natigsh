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