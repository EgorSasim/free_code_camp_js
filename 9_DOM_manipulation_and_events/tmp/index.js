const liTags = document.querySelectorAll('li1');

// for (const liTag in liTags) {
//     console.log('liTag: ', liTag);
//     if (liTag == 'innerHtml') {
//         console.log(liTag)
//     }
// }

console.log(liTags)
liTags.forEach(tag => console.log('tag: ', tag.innerHTML))

const emptyDiv = document.querySelector('#empty-div');

const emptyDiv2 = document.querySelector('#empty-div2');
const unorderedList = document.querySelector('#unordered-list');

function fullFillDiv() {
    emptyDiv.innerHTML = emptyDiv.innerHTML ? "" : "<h1>Hello</h1><ul><li>Firts li</li><ul><p hidden>This is PARAGRAPH!!!</p>";
    console.log('inner text: ', emptyDiv.innerText);
    console.log('text content: ', emptyDiv.textContent);
    console.log('inner HTML: ', emptyDiv.innerHTML);
}

function fullFillDiv2() {
    const newElement = document.createElement('h1')
    newElement.textContent = "Hello 2";

    emptyDiv2.appendChild(emptyDiv2.innerHTML ? document.createElement('h1') : newElement);
}

function Counter() {
    let cnt = 0;

    return {
        inc: () => cnt++,
        reset: () => cnt = 0,
        dec: () => cnt--,
    }
}

const cnt = new Counter();
const incrementer = cnt.inc;
const decrementer = cnt.dec;
const nullifier = cnt.reset;

const emptyList = document.querySelector('.empty-list');

function addLiToList() {
    const newLi = document.createElement("li");
    newLi.textContent = incrementer();

    emptyList.appendChild(newLi);
}

function removeChildFromList() {
    const lastChild = document.querySelector('.empty-list li:last-of-type');

    if (!lastChild) {
        console.log('empty list');
        return;
    }

    console.log('empty list: ', emptyList);
    console.log('last child: ', lastChild);

    emptyList.removeChild(lastChild)
    decrementer();
}

function resetList() {
    emptyList.textContent = "";
    nullifier();
}

///// ATTRIBUTES //////
const divForAttrs = document.querySelector('#div-for-attrs');
console.log('div:', divForAttrs);


divForAttrs.style.width = '200px';
divForAttrs.style.height = '200px';
divForAttrs.style.backgroundColor = 'cyan';

console.log('style: ', divForAttrs.style);

divForAttrs.addEventListener('click', (e) => {
    console.log('event: ', e);
    const currColor = divForAttrs.style.backgroundColor;
    divForAttrs.style.backgroundColor = currColor === 'red' ? 'cyan' : 'red';
});

const tmpAttrsBtn = document.querySelector('[onclick="hehehe()"]');
console.log('tmp attrs btn: ', tmpAttrsBtn);

const toggleMenu = document.getElementById('menu');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => toggleMenu.classList.toggle('show'))


function changeImg() {
    const catImg = document.getElementById('cat-img');

    catImg.setAttribute('src', `https://cataas.com/cat?${new Date().getTime()}`);
    catImg.alt = 'camperBot Cat';

    console.log('image was just changed...');
}

////// ANIMATION /////

function animate() {
    update();

    requestAnimationFrame(animate);
}

const divToAnimate = document.getElementById('div-to-animate');
let position = 0;

function update() {
    divToAnimate.style.transform = `translateX(${position}px)`;
    position += 2;

    if (position > window.innerWidth) {
        position = -divToAnimate.offsetWidth;
        console.log('offsetWidth: ', divToAnimate.offsetWidth);
    }
}

requestAnimationFrame(animate);


const divToAnimate2 = document.getElementById('div-to-animate2');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');


const animation = divToAnimate2.animate([
    {
        transform: "translateX(0px)"
    },
    {
        transform: "translateX(100px)"
    }
], {
    duration: 2000,
    iterations: Infinity,
    direction: "alternate",
    easing: "ease-in-out"
})

playBtn.addEventListener('click', () => {
    animation.play();
});

pauseBtn.addEventListener('click', () => {
    animation.pause();
})


////// CANVAS ////

const canvas = document.getElementById('new-canvas');
canvas.width = 400;
canvas.height = 400;

const ctx = canvas.getContext('2d');
ctx.fillStyle = "crimson";
ctx.fillRect(1, 1, 150, 150);

ctx.font = "30px Arial";
ctx.fillStyle = 'black';
ctx.fillText("Hello, world", 1, 50);

console.log(ctx)

///// DIALOG ///
const dialog = document.getElementById('modal-dialog');
const openDialogBtn = document.getElementById('modal-dialog-open');
const closeDialogBtn = document.getElementById('modal-dialog-close');

openDialogBtn.addEventListener('click', () => dialog.showModal());
closeDialogBtn.addEventListener('click', () => dialog.close());