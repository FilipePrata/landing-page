var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var rightArrow = window.document.getElementById("rightArrow")
var leftArrow = window.document.getElementById("leftArrow")

function ScrollRight() {
    bruna.style = "display: none"
    samantha.style = "display: flex"
    rightArrow.style = "display: none"
    leftArrow.style = "display: flex"
}

function ScrollLeft() {
    bruna.style = "display: flex"
    samantha.style = "display: none"
    rightArrow.style = "display: flex"
    leftArrow.style = "display: none"
}