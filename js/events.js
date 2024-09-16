// option 1: directly set on the HTML Element.

// option 2:
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3:
const makeBluebtn = document.getElementById('make-blue');
makeBluebtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 4:
const makePurplebtn = document.getElementById('make-purple');
        makePurplebtn.onclick = function makePurple(){
            document.body.style.backgroundColor= 'purple';
        }