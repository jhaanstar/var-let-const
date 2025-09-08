// Ejercicio 3: Bloques de Código y Alcance

// 1. Declara la variable `x` usando `let`
let x = 5;

if (true) {
  let x = 10; // 2. Otra variable x dentro del bloque
  console.log(x); // imprime 10 porque este x solo existe dentro del if
}

console.log(x); // imprime 5 porque el x de fuera del if es distinto

// 4. Repite el ejercicio usando `const`
const y = 5;

if (true) {
  const y = 10;
  console.log(y); // imprime 10 solo existe dentro del if
}

console.log(y); // imprime 5 el y de fuera del if es distinto

// Conclusión: el let y el const, se puede usar con el mismo nombre de variable dentro de un bloque sin problemas, porque esas variables solo existen dentro de ese bloque. La variable de afuera no se ve afectada :3
