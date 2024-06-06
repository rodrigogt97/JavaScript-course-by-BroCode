// while loop = repeat some code while some condition is TRUE

let username = '';

while (username ===''){
  console.log(`you did not enter your name`);
}

console.log (`hello ${username}`);

while (username === ""){
  username = window.prompt(`Enter your name`);
}

console.log(`Hello ${username}`);

// do is another way to excute the code

// 'do' execute the code first and then check the condition or 'while'

do {
  username = window.prompt('Enter your name');
} while(username ==="" || username === null)


// another example

let loggedIn = false;

let username1;

let password;

while(!loggedIn){
  username1 = window.prompt(`Enter your username`);
  password = window.prompt('Enter your password');

  if (username ==='myUsername' && password === "myPassword") {
    console.log('you are logged in');
  }
  else {
    console.log('Invalid credentials');
  }
}
