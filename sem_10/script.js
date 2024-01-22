function generateInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function Captcha() {
    return {
        a: generateInt(5, 20),
        b: generateInt(1, 30),
        captcha: function() {
            let res = prompt(`${this.a} + ${this.b} = ???`);
            if (res == this.a + this.b) return true;
            else return false;
        }
    }
}


function isEmpty(obj) {
    return (obj.value.length > 0 ? false : true);
}

document.getElementById("captcha").onsubmit = function(e) {
    let input = document.getElementById("input");
    if (!isEmpty(input)) {
        let res = new Captcha().captcha();
        if (!res) {
            e.preventDefault();
            alert("Вы робот");
        }
    }
    else alert("Форма пуста");
}


function Accumularor(startingValue) {
    return {
        value: Number(startingValue),
        read: function() {
            let res = Number(prompt("Введите количество товара"));
            if (res > 0) this.value += res;
            else alert("Количество товара не может быть меньше или равно 0");

        }
    }
}


var accum = new Accumularor(
    document.getElementById("value").textContent
)

document.getElementById("add").onclick = function() {
    let p = document.getElementById("value");
    accum.read();
    p.textContent = accum.value;
}


function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength-3) + "...";
    }
    return str;
}

function changeText(obj, maxlength) {
    obj.textContent = truncate(obj.textContent, maxlength);
}

document.getElementById("b1").onclick = function() {
    let length = 10;
    changeText(document.getElementById("s1"), length); 
}

document.getElementById("b2").onclick = function() { 
    let length = 20;
    changeText(document.getElementById("s2"), length); 
}

document.getElementById("b3").onclick = function() { 
    let length = 17;
    changeText(document.getElementById("s3"), length);
}