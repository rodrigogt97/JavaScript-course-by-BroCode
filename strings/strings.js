// string slicing = creating a subsctring 
// from a portion of another string

//     string.slice(start,end)


const email = 'Bro@gmail.com'

let username = email.slice(0, email.indexOf("@"));
let domain = email.slice(email.indexOf('@'));

console.log(username)
console.log(domain)

const fullName = 'Luis Rodrigo';

let firstName =fullName.slice(0,fullName.indexOf(' '));

let lastName = fullName.slice(fullName.indexOf(" ") +1);

console.log(firstName);

console.log(lastName);