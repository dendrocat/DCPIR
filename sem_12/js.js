let num = 0;

function addMess() {
    let contain = document.querySelector(".items");

    let li = document.createElement("li");
    li.textContent = `Notification ${++num}`;

    contain.append(li);

    contain.scrollTop = li.offsetTop;
    console.log(contain.scrollTop, li.offsetTop);
}

function addingMess() {
    return setInterval(addMess, 3000);
}

function stop(func, id) {
    clearInterval(id);
    setTimeout(func, 10000);
}

let id = addingMess();


document.querySelector(".icon1").onclick = function() {
    stop(addingMess, id);
}


function addingLi() {
    let contain = document.querySelector("#ul")
    while (true) {
        let text = prompt("Введите текст");
        if (text == null) break;

        let li = document.createElement("li");
        li.textContent = text;
        contain.append(li);
    }
}

document.querySelector("#addLi").onclick = addingLi;

function createDiv(text) {
    let div = document.createElement("div");
    div.className = "notification";
    div.textContent = text;


    return div;
}

document.querySelector("#show").onclick = function() {
    let text = prompt("Введите текст");
    let div = createDiv(text);
    this.after(div);
    setTimeout(() => div.remove(), 1500);
}