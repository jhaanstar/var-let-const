// Ejercicio 4: Ciclos y Alcance de Variables

// 1. Usando `var`
console.log("ciclo con var")
for (var i = 0; i < 5; i++) {
   //Imprime en consola el valor de i
  console.log("Dentro del ciclo (var):", i);
}
 //Imprime en consola el valor de i
console.log("Fuera del ciclo (var):", i); 


  // 2. Usando `let`
console.log("ciclo con let");
for (let j = 0; j < 5; j++) {
  //Imprime en consola el valor de i
  console.log("Dentro del ciclo (let):", j);
}
 console.log("fuera del ciclo (let):", j); // esto da undefined

  //3. Usando `const` NO funciona
console.log("ciclo con const");
  for (const x =0; x<5;x++ ) { 
    console.log ("dentro de el ciclo (const):". x)
       //Imprime en consola el valor de i
  console.log ("dentro de el ciclo (const):". x)
}

//conclusion : var existe fuera del if y se puede usar en toda la función, let solo sirve dentro del bloque donde se declara y const también es de bloque, pero no se le puede cambiar el valor.
  
