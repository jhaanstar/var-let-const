// Ejercicio 5: Comprendiendo Closure con `let` y `var`

const funcs = [];

// Usando `var`
for (var i = 0; i < 3; i++) {
  funcs.push(() => {
    console.log(i); // Todas imprimiran 3 porque var no tiene alcance de bloque
  });
}

for (let f of funcs) {
  f(); // Ejecuta las funciones almacenadas
}

// Usando `let`
const funcsLet = [];

for (let j = 0; j < 3; j++) {
  funcsLet.push(() => {
    console.log(j); // Cada función recuerda su propio j
  });
}

for (let f of funcsLet) {
  f(); // Ejecuta las funciones almacenadas
}
//Con var, todas las funciones usan la misma variable y al final muestran 3, 3, 3, con let, cada función guarda su propio valor de j y muestran 0, 1, 2.
