// option 1: directly set on the HTML Element.
//  <button onclick="console.log(65)">Another</button>

// option 2: add onclick function on the HTLM element
// Important: we will use this
//  <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3:
const makeBluebtn = document.getElementById('make-blue');
makeBluebtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 3 another:
const makePurplebtn = document.getElementById('make-purple');
makePurplebtn.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option 4:
const pinkBtn = document.getElementById('make-pink');
pinkBtn.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option 4 another

const makeGreenBtn = document.getElementById('make-green');
makeGreenBtn.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';

});

// option 4 Final
// Important: we will use this sometimes
 // document.getElementById('golden-rod').addEventListener('click', function(){});
 document.getElementById('golden-rod').addEventListener('click', function(){
    document.body.style.backgroundColor= 'goldenrod';
});