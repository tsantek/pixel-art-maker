document.addEventListener('DOMContentLoaded', function() {


    let canvas = document.querySelectorAll('.grid');
    let colorSelector = document.querySelectorAll(".paint");
    let clearButton = document.querySelector('#clean')

    let color = "white";



    //COLOR LOOP AND SELECTING COLOR 
    for (var i = 0; i < colorSelector.length; i++) {
        colorSelector[i].addEventListener("click", function(e) {
            color = e.target.style.backgroundColor;
        })
    }
    // CANVAS LOOP AND SELECTING DIV
    for (var i = 0; i < canvas.length; i++) {
        canvas[i].addEventListener("click", function(e) {
            if (e.target.classList.contains('grid')) {
                console.log('ok')
                e.target.style.backgroundColor = color;
            }
        })
    }

    // CLEAR CANVAS

    clearButton.addEventListener("click", function(e) {
        alert("TEST")
    })






})