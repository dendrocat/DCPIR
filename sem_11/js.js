arr = [];
let contain = document.querySelector("#arr");

function compareInc(a, b) {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
}

function compareDec(a, b) {
    if (a.price < b.price) return 1;
    if (a.price > b.price) return -1;
    return 0;
}

function Prod(name, price, count) {
    return {name, price, count};
}

function delFromArr() {
    arr.splice(arr.findIndex(el => 
        this.textContent.includes(el.name)
    ), 1);

    contain.innerHTML = '';
    if (arr.length != 0) arr.forEach(el => addProd(el));
    else {
        document.querySelector("#lab").textContent = "Массив пуст";
        document.querySelector("#res").textContent = 0;
    }
}

function updRes() {
    let res = 0;
    arr.forEach(el => res += el.price * el.count);

    document.querySelector("#res").textContent = res;
}

function addCount() {
    let lis = document.querySelectorAll(`.${this.parentNode.className}`);
    lis.forEach(li => {
        let c = li.querySelector(".count");

        let i = arr.findIndex(el => el.name == li.querySelector(".name").textContent);
        
        c.textContent = Number(c.textContent) + 1;
        arr[i].count = Number(c.textContent);
    });
    updRes();
}

function addProd(container, el, add=true) {
    let li = document.createElement("li");
    li.className = el.name;

    let span = document.createElement("span");
    span.innerHTML = `<span class="name">${el.name}</span> - ${el.price} ₽ - <span class="count">${el.count}</span> шт.`;
    span.onclick = delFromArr;
    li.appendChild(span);
    
    if (add) {
        let b = document.createElement("button");
        b.onclick = addCount;
        b.textContent = "+";
        b.style.marginLeft = "20px"
        li.appendChild(b);
    }

    container.appendChild(li);

    document.querySelector("#lab").textContent = "Для удаления элемента из массива нажмите на него";
}


document.querySelector("#add").onclick = function() {
    let name = prompt("Введите наименование товара");
    let price = Number(prompt("Введите цену товара"));

    arr.push(new Prod(name, price, 1));
    addProd(contain, arr.at(-1));

    updRes();
}

document.querySelector("#clear").onclick = function() {
    arr.splice(0, arr.length);
    contain.innerHTML = '';

    document.querySelector("#lab").textContent = "Массив пуст";
    updRes();
}

document.querySelector("#filt").onclick = function() {
    let a = Number(prompt("Введите нижнюю границу цены"));
    let b = Number(prompt("Введите верхнюю границу цены"));
    let container = document.querySelector("#new_arr");
    container.innerHTML = '';

    let new_arr = arr.filter(el => el.price >= a && el.price <= b);

    if (new_arr.length == 0) document.querySelector("#a").textContent = "Новый массив пуст";
    else {
        document.querySelector("#a").textContent = "Новый массив";
        new_arr.forEach(el => addProd(container, el, false));
    }
}

document.querySelector("#sort_inc").onclick = function() {
    arr.sort(compareInc);
    contain.innerHTML = '';

    arr.forEach(el => addProd(contain, el));
}

document.querySelector("#sort_dec").onclick = function() {
    arr.sort(compareDec);
    contain.innerHTML = '';

    arr.forEach(el => addProd(contain, el));
}