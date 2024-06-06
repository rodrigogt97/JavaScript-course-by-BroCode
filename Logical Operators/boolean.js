// logical operators = used to combine or manipulate boolean values (true or false)

/// and = &&
// or = ||
// not !

const caca = 20;

if (caca > 60) {
  console.log ('La caca no pesa mucho');
}
else if (caca < 50) {
  console.log ('La temperatura es de 50 grados');
}
else {
  console.log('La caca debe apestar');
}

// logical operator example

if (caca > 60 && caca <=100) {
  console.log('Hemos pasado la prueba');
}
else {
  console.log('No hemos pasado la prueba');
}

const temp = -100;

if (temp >0 && temp <= 30) {
  console.log('El clima es muy bueno');
}

else {
  console.log('El clima es realmente malo');
}

if (temp >0 || temp <=30){
  console.log('The wheater is good');
}
else {
  console.log('The wheater is bad')
}

const isSunny = true;

if (!isSunny) {
  console.log("It is cloudy");
}

else {
  console.log('it is sunny');
}
