const clock = document.querySelector('.clock');
setInterval(
    () => clock.innerHTML = new Date().toLocaleTimeString(),
    1000);

const calendar = document.querySelector('.calendar');
const updateTime = () => calendar.innerHTML = (new Date()).toLocaleDateString();
setInterval(updateTime, 1000);

alert('Hello my dear friend');
alert('Please start write your shopping list');


const link = document.querySelector('a');

    link.href = 'https://www.freecodecamp.org/';
    link.textContent = 'freecodcamp';

const div = document.querySelector('.task');
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;
div.style.width = WIDTH + 'px';
div.style.height = HEIGHT + 'px';

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
       let div = ev.target.parentNode;
       div.remove();
    }
}, false);

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('toDoEl').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
       alert("Please start write your list");
    }else {
       document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    let span = document.createElement('SPAN');
    span.className = "close";
    li.appendChild(span);
}

