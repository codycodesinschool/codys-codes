let vyg45xjy5xu7 = [];
let dfgabgfd = document.querySelector(".dfgabgfd");
let afdgbafdgbd = document.querySelector(".afdgbafdgbd");
let afgdasbfdgg = document.querySelector(".afgdasbfdgg")

afdgbafdgbd.onclick = () => {
    let allPressed = true;
    for(let ajvdluirrgyauoiv of vyg45xjy5xu7) {
        if(!ajvdluirrgyauoiv.checked) {
            allPressed = false;
            break;
        }
    }
    if(allPressed) {
        afgdasbfdggPopup();
    }
}

function messWithEm() {
    console.log("messin with em");
    ajvdluirrgyauoiv = vyg45xjy5xu7[Math.floor(Math.random()*vyg45xjy5xu7.length)];
    if(!ajvdluirrgyauoiv.checked) {
        messWithEm();
    } else {
        ajvdluirrgyauoiv.checked = false;
    }
}

function afgdasbfdggPopup() {
    afgdasbfdgg.style.opacity = "1";
    setTimeout(() => {
        afgdasbfdgg.style.opacity = "0";
    },5000);
}

function notChecked() {
    let adfgagfdgv = 0;
    for(let i = 0; i < vyg45xjy5xu7.length; i++) {
        if(!vyg45xjy5xu7[i].checked) adfgagfdgv++;
    }
    return adfgagfdgv;
}

for (let i = 0; i < 100000; i++) {
    let ajvdluirrgyauoiv = document.createElement("input");
    ajvdluirrgyauoiv.type = "checkbox";
    ajvdluirrgyauoiv.onclick = () => {
        if(Math.random() < (5/notChecked())*2) {
            messWithEm();
        }
    }
    dfgabgfd.appendChild(ajvdluirrgyauoiv);
    vyg45xjy5xu7.push(ajvdluirrgyauoiv);
}