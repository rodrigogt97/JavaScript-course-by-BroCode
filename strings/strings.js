// string slicing = creating a subsctring 
// from a portion of another string

//     string.slice(start,end)


const email = 'Bro@gmail.com'

let username = email.slice(0, email.indexOf("@"));
let domain = email.slice(email.indexOf('@'));

console.log(username)
console.log(domain)

