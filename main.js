document.addEventListener('DOMContentLoaded', function() {


    let canvas = document.querySelectorAll('.grid');
    let colorSelector = document.querySelectorAll(".paint");
    let clearButton = document.querySelector('#clean');
    let selectedColor = document.querySelector(".selected-color");

    let color = "white";


    var isDown = false;


    selectedColor.style.backgroundColor = color;

    console.log(canvas)

    //COLOR LOOP AND SELECTING COLOR 
    for (var i = 0; i < colorSelector.length; i++) {
        colorSelector[i].addEventListener("click", function(e) {
            color = e.target.style.backgroundColor;
            selectedColor.style.backgroundColor = color;
        })
    }




    // CANVAS LOOP AND SELECTING DIV
    for (var i = 0; i < canvas.length; i++) {
        canvas[i].addEventListener("click", function(e) {
            if (e.target.classList.contains('grid')) {
                e.target.style.backgroundColor = color;
            }
        })
    }



    // CLEAR CANVAS

    clearButton.addEventListener("click", function() {
        for (let i = 0; i < canvas.length; i++) {
            canvas[i].style.backgroundColor = "white";
            selectedColor.style.backgroundColor = "white";
        }
    })

    console.log(color)

})