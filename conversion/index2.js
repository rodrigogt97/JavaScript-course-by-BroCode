
// const = a variable that cannot be changed 


/*
let pi = 3.1415;
let radius;
let circunferencia

radius = window.prompt('Bienvenido, Ingrese el radio de un circulo');

radius = Number(radius);

circunferencia = 2*pi*radius;

document.getElementById("medida").textContent = `La circunferencia es ${circunferencia}`

*/

// otro programa para hacer funcionar la pagina web

const PI = 3.14159;
let radius;
let circunferencia;

document.getElementById('calcular').onclick = function() {
  
  radius = window.prompt('Ingrese el radio del circulo');

  radius =Number(radius);
 
  circunferencia = radius*PI*2;
 
  document.getElementById('medida').textContent = (`La medida es ${circunferencia}`)
}