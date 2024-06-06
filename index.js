// how to accept user input

// 1. easy way = window prompt
// 2. professional way = HTML textbox

let username;

document.getElementById ("mySubmit").onclick =function (){
  username = document.getElementById("myText").value;

  document.getElementById("myH1").textContent = `Bienvenido ${username}`
}

console.log (username);

