let num = 0;

function addMess() {
    let contain = document.querySelector(".items");

    let li = document.createElement("li");
    li.textContent = `Notification ${++num}`;

    contain.append(li);

    contain.scrollTop = li.offsetTop;
}

function addingMess() {
    return setInterval(addMess, 1000);
}

function stop(func, id) {
    clearInterval(id);
}

let id = addingMess();
let st = false;

document.querySelector(".icon1").onclick = function() {
    if (!st) {
        stop(addingMess, id);
        st = true;
    }
    else {
        id = addingMess();
        st = false;
    }
}

function deleteNot(el) {
    el.style.transform = "translate(-100%)";

    setTimeout(() => el.remove(), 250);
}

document.querySelector(".notifications").onclick = function(event) {
    let li = event.target.closest("li");
    if (!li) return;
    if (!this.contains(li)) return;

    deleteNot(li);
}





let img = document.querySelector("#img");
img.style.display = "flex";
img.style.justifyContent = "center";
img.style.alignItems = "center";
img.style.height = "100vh";




window.addEventListener("scroll", function(event) {
    let top = this.pageYOffset;
    let img = document.querySelector("#back");
    let speed = img.getAttribute("speed");
    let yPos = -(top * speed) / 100;
    img.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
});


let arr = [
    "v_files/3.jpg",
    "v_files/4.png",
    "v_files/5.png",
    "v_files/6.jpg"
]

window.addEventListener("scroll", function(event) {
    let height = this.document.querySelector("#img").clientHeight; 
    let img = this.document.querySelector("#galaxy");

    let index = this.pageYOffset;
    let i = Number.parseInt(index / height * arr.length * 2);

    img.src = arr[i % arr.length];
});

document.addEventListener("click", function(event) {
    document.querySelector("#coords").textContent = `x: ${event.pageX}px -- y: ${event.pageY}px`;
})