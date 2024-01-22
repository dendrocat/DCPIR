let passwd = "Я главный";


let res = prompt("Введите логин", "");
if (res == "Админ") {
    res = prompt("Введите пароль", "");
    if (res == null) {
        alert("Отменено");
    }
    else if (res == passwd) {
        alert("Здравствуйте!");
    }
    else {
        alert("Неверный пароль");
    }
}
else if (res == null) {
    alert("Отменено");
}
else {
    alert("Я вас не знаю");
}



function changeText() {
    let p = document.getElementById('text');
    if (p.style.color == "red") {
        p.style.color = "black";
        p.innerHTML = Number(p.innerHTML) - 1;
    }
    else {
        p.style.color = "red";
        p.innerHTML = Number(p.innerHTML) + 1;
    }
}

document.getElementById('im').style.visibility = "visible";
document.getElementById('img').style.visibility = "hidden";

document.getElementById('heart').onclick = function() {
    
    let im = document.getElementById('im');
    let img = document.getElementById('img');
    if (im.style.visibility == "visible") {
        im.style.visibility = "hidden";
        img.style.visibility = "visible";
    }
    else {
        im.style.visibility = "visible";
        img.style.visibility = "hidden";
    }
    changeText();
}


var drawing = false;

document.body.addEventListener("mousemove", function(e) {
    let x = e.clientX;
    let y = e.clientY;
    if (drawing) {
        drawImage(x, y);
    }
})


function drawImage(x, y) {

    let img = document.createElement('img');
    img.src = "black.png";

    img.style.width= "50px";
    img.style.height="50px";

    img.style.position="absolute";
    img.style.top= y-20 + "px";
    img.style.left= x-20 + "px";
    img.style.zIndex = Number(-1);

    document.body.append(img);

    document.getElementById('d').innerHTML = x + " " + y;
}

document.getElementById('draw').onclick = function() {
    if (drawing) {
        drawing = false;
        this.style.color='black';
        this.style.backgroundColor='aqua';
    }
    else {
        this.style.color='white';
        this.style.backgroundColor='rgb(0,0,53)';
        drawing = true;
        document.getElementById('d').innerHTML = "Рисовать";
    }
}