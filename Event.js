/*
Javascript offers three ways to add an event listener to a DOM element.

1. inline event listener
2. onevent listener
3. addEventListener()
*/

/*
1. inline event listener

html:
    <button onclick="greeting()">
    </button>
js:
    function greeting() {
        console.log("Hi, Sivaram Yadav");
    }
*/

function greeting() {
    console.log("Hi, Sivaram Yadav");
}

/*
2. onevent listener
html:
    <button id="greetBtn">
        Greet
    </button>
js:
    let greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = function() {
           console.log("Hi, Sivaram Yadav"); 
    }      
*/
let greetBtn2 = document.getElementById("greetBtn2");
greetBtn2.onclick = function() {
       console.log("Hi, Vignesh Yadav"); 
}

/*
3. addEventListener()

*/

let greetBtn3 = document.getElementById("greetBtn3");
greetBtn3.addEventListener("click", function() {
   console.log("Hi, Pranathi"); 
}); 

// More Events
/*
    Events are the actions by which the user or browser 
    interact with HTML elements. 
    1. Keyboard Events
        1.1. Keydown
        1.2. Keyup
    2. Mouse Events
    3. Touch Events
    ............etc.
*/
// Keydown - event
/* This event occurs when key is pressed down.  */



let inputElement = document.createElement("input");
function printKeyDown() {
    console.log("key pressed");
}
inputElement.addEventListener("keydown", printKeyDown);
document.body.appendChild(inputElement);


