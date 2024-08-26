let title = document.getElementById("website_title");
title.innerHTML = "neuer Title";

document.getElementById("test_div").innerHTML = "<p>test</p>";


// function onButtonClick() {
//     alert('Button clicked!');
//   }

// const button = document.querySelector('button');
// button.addEventListener('click', onButtonClick);



document.getElementById("test_div").classList.add("green_bg") 
document.getElementById("test_div").classList.remove("green_bg") 
document.getElementById("test_div").classList.toggle("green_bg") 

document.getElementById("test_input").setAttribute("value", "125");


function toggleDNone(id){
    document.getElementById(id).classList.toggle("d_none");
}

function logger(){
    console.log(52525);
}


