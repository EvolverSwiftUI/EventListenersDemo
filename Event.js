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


