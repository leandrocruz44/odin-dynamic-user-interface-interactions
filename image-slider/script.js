const images = []
images[0] = new Image();
images[0].src = 'images/1.png'
images[1] = new Image();
images[1].src = 'images/2.png'
images[2] = new Image();
images[2].src = 'images/3.png'

let counter = 0;
const length = images.length;


function setImage(x) {
    const img = document.getElementById('image')
    img.src = images[x].src;
}

function changeImage() {
    const next = document.getElementById('next');
    next.addEventListener('click', () => {
        counter++;
        if (counter >= length) {
            counter = 0;
        }
        setImage(counter);
        highlightDots(counter);
    })

    const previous = document.getElementById('previous');
    previous.addEventListener('click', () => {
        counter--;
        if (counter <= -1) {
            counter = length - 1;
        }
        setImage(counter);
        highlightDots(counter);
    })
}

function autoChange() {
    counter++;
    if (counter >= length) {
        counter = 0;
    }
    setImage(counter);
    highlightDots(counter);
}

function createDots() {
    const dotsField = document.getElementById('dots')
    for (let i = 0; i < length; i++) {
        const dotsObj = document.createElement('button')
        dotsObj.classList.add('dots')
        dotsObj.id = i;
        dotsField.appendChild(dotsObj)
    }
    selectDots()
}

function selectDots() {
    let dotGroup = document.querySelectorAll('.dots')
    dotGroup.forEach((dot) => {
        dot.addEventListener('click', () => {
            setImage(dot.id);
            counter = dot.id;
            highlightDots(dot.id);
        })
    })
}


function highlightDots(x) {
    let dotId = document.getElementById(x)
    let dotGroup = document.querySelectorAll('.dots')
    dotGroup.forEach((dot) => {
        dot.style.backgroundColor = 'grey';

    })
    if (dotId.id == counter) {
        dotId.style.backgroundColor = 'white';
    } 
}

setImage(counter)
changeImage()
createDots()
setInterval(autoChange, 5000);
