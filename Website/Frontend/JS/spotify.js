console.log("Hello World");

// window.alert("WARNING!! Godizlla Entered");

let hello = document.querySelector("button");
hello.addEventListener("click",ButtonPressed);

function ButtonPressed()
{
    let user = prompt("Enter the user id")
    alert("Your Id is " + user);
}