const firstScore = document.querySelector('#first')
const secondScore = document.querySelector('#second')
const oneBtn = document.querySelector('.first')
const secBtn = document.querySelector('.second')
const resetBtn = document.querySelector('.reset')
const limit = document.querySelector('#e');
let p1score = 0;
let p2score = 0;
let win = 5;
let gameover = false;
oneBtn.addEventListener('click', function () {
    if (!gameover) {

        p1score++;
        if (p1score == win) {
            gameover = true;
            firstScore.classList.add("winner");
            secondScore.classList.add("loser")
        } firstScore.innerText = p1score;
    }
})
secBtn.addEventListener('click', function () {
    if (!gameover) {

        p2score++;
        if (p2score == win) {
            gameover = true;
            firstScore.classList.add("loser");
            secondScore.classList.add("winner")
        } secondScore.innerText = p2score;
    }
})
resetBtn.addEventListener("click", reset)
e.addEventListener("change", function () {
    win = parseInt(e.value);
    reset();
})


function reset() {
    gameover = false;
    p1score = 0;

    p2score = 0;
    firstScore.innerText = p1score;
    secondScore.innerText = p2score;
    firstScore.classList.remove("winner","loser");
    secondScore.classList.remove("winner","loser");
}