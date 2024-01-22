document.querySelector("#contents").innerHTML += `<a href="http://dendrocat.github.io/course2023">Магазин игрущек "Всего по чуть-чуть"</a>`;

document.querySelector("#contents").onclick = function(e) {
    let a = e.target.closest("a");
    if (!a) return;
    if (!this.contains(a)) return;

    let res = prompt("Вы хотите перейти по ссылке?");
    if (res != "Да") return false; 
}


document.querySelector("#imgs").onclick = function(event) {
    let div = event.target.closest(".addition");
    if (!div) return;
    if (!this.contains(div)) return;

    document.querySelector("#main-img").src = div.lastElementChild.src;
}

function delSelect(className) {
    return className.substring(0, className.indexOf(" "));
}

document.querySelector("#files").onclick = function(event) {
    let p = event.target.closest("p");
    if (!p) return;
    if (!this.contains(p)) return;

    if (event.ctrlKey) {
        if (p.className.includes("selected")) {
            p.className = p.className.substring(0, p.className.indexOf(" "));
        }
        p.className += " selected";
    }
    else {
        let ps = document.querySelectorAll(".file");
        
        ps.forEach(el => {
            if (el.className.includes("selected")) {
                el.className = delSelect(el.className);
            }
        });
        p.className += " selected";
        
    }
}

document.querySelector("#res").textContent = document.querySelector("#slid").value;


document.querySelector("#slid").addEventListener("input", (event) => {
    document.querySelector("#res").textContent = event.target.value;
});


document.querySelector("#prods").ondragstart = () => false;



document.querySelector("#prods").onmousedown = function(e) {
    let prod_orig = e.target.closest(".prod");

    let prod = prod_orig.cloneNode(true);

    prod.style.position = 'absolute';
    prod.style.zIndex = 1000;
    document.body.append(prod);
    

    let shiftX = e.clientX - prod_orig.getBoundingClientRect().left;
    let shiftY = e.clientY - prod_orig.getBoundingClientRect().top;
    

    function moveAt(pageX, pageY) {
        prod.style.left = pageX - shiftX + "px";
        prod.style.top = pageY - shiftY + "px";
    }

    
    moveAt(e.pageX, e.pageY);
    function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);

        prod.style.display = "none";
        let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
        prod.style.display = prod_orig.style.display;

        elemBelow = elemBelow.closest("#bin");
        let bin = document.querySelector("#bin");
        if (elemBelow == bin) bin.style.border = "rgb(220, 220, 0) solid 2px";
        else bin.style.border = "none";
    }

    document.addEventListener("mousemove", onMouseMove);

    prod.onmouseup = function() {
        document.removeEventListener("mousemove", onMouseMove);
        prod.onmouseup = null;

        prod.remove();

        prod.style.position = "relative";
        prod.style.zIndex = "1";
        prod.style.left = 0;
        prod.style.top = 0;
        bin.style.border = "none";
        bin.append(prod);

    }

    prod.ondragstart = () => false;
}


function timeFunc1(timeFraction) {
    return  1 - Math.sin(timeFraction);
}

function timeFunc2(timeFraction) {
    return Math.cos(timeFraction);
}

function draw1(progress) {
    let block = document.querySelector("#block1").querySelector("img");
    let alpha = progress * 360;

    block.style.transform = `rotate(${alpha}deg) rotateX(${alpha}deg) rotateY(${alpha}deg)`;
}

function draw2(progress) {
    let block = document.querySelector("#block2").querySelector("img");


    block.style.transform = `scale(${progress}) rotate(${progress*360}deg)`;

}

let id1 = null, id2 = null;
let cur1 = 0, cur2 = 0;
function animLoop(id, cur, timing, draw, duration) {
    
    let step =  Math.PI / duration;
    
    function animate() {
        cur += step;
        let progress = timing(cur);
        draw(progress);

        id = requestAnimationFrame(animate);
    }

    id = requestAnimationFrame(animate);
}

document.querySelector("#block1").onclick = function() {
    if (!id1) animLoop(id1, cur1, timeFunc1, draw1, 1000);
    else {
        cancelAnimationFrame(id1);
        id1 = null;
    }
}

document.querySelector("#block2").onclick = function() {
    if (!id2) animLoop(id2, cur2, timeFunc2, draw2, 100);
    else {
        cancelAnimationFrame(id2);
        id2 = null;
    }
}