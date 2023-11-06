// This is a comment. It's like a note to help the grown-ups understand the code.

// This line of code finds the element with the ID 'circle' on the web page and saves it in a variable called 'circle.'
let circle = document.querySelector('#circle');

// This part listens for when the mouse is moved on the web page.
window.addEventListener('mousemove', function (details) {
    // This line logs the X and Y coordinates of the mouse cursor to the console.
    console.log(details.clientX, details.clientY);

    // These two lines save the X and Y coordinates of the mouse cursor in variables.
    let xValue = details.clientX;
    let yValue = details.clientY;

    // This part waits for a little while (100 milliseconds) before doing something.
    setTimeout(function(){
        // These two lines move the 'circle' to a new position based on the mouse cursor's coordinates.
        circle.style.top = `${yValue}px`;   // Move it up or down
        circle.style.left = `${xValue}px`;  // Move it left or right
    
    }, 100);
})
