function saklar() {
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");

    let saklar1 = document.getElementById("saklar1");
    let saklar2 = document.getElementById("saklar2");
    let saklar3 = document.getElementById("saklar3")

    if (saklar1.checked) {
        lampu1.src = 'assets/images/on.gif'
    }
    else {
        lampu1.src = 'assets/images/off.gif';
    }

    if (saklar2.checked) {
        lampu2.src = 'assets/images/on.gif'
    }
    else {
        lampu2.src = 'assets/images/off.gif';
    }

    if (saklar3.checked) {
        lampu3.src = 'assets/images/on.gif'
    }
    else {
        lampu3.src = 'assets/images/off.gif';
    }
}