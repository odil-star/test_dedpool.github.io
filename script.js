function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Ошибка";
    }
}

function playClick() {
    const sound = document.getElementById("clickSound");
    if (sound) {
        sound.pause();
        sound.currentTime = 0;
        sound.play().catch(e => {
            console.warn("Звук не воспроизвёлся:", e);
        });
    }
}
