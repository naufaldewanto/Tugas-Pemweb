// Styling Text
const text1 = document.getElementById("teks1");
const isitext1 = document.createTextNode("Pindah Page")
text1.appendChild(isitext1)
text1.style.textTransform = "uppercase";

//Tambah Element
const Btn = document.createElement("button");
const textBtn = document.createTextNode("Saklar");
const Br = document.createElement("br");
Btn.appendChild(textBtn);

const div2 = document.querySelector("#div2");
div2.appendChild(Btn);

Btn.setAttribute("id", "button");

Btn.onclick = pindahPage;

function pindahPage() {
    location.replace("saklar.html")
}