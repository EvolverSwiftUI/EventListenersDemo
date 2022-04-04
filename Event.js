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
function printKeyDown1(event) {
    // console.log(event.type);
   // console.log(event.target);
    console.log(event.key);    
}
inputElement.addEventListener("keydown", printKeyDown1);
document.body.appendChild(inputElement);

// Event Object
/*
whenever an event happens,
the browser creates an event object.

It contains information about the event 
that has happened.

It consists of diffent properties and methods
1. type
2. target
3. key
4. timestamp
5. stopPropagation
......................etc.
*/
