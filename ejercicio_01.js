// Ejercicio 1: Diferencias entre `var` y `let`
function displayMessage() {
    var message = "hello world"
    var message = "hola mundo" //si se puede :D

    if (true) {
      let message = "hello, JavaScript"
      //let message = "hello, JavaScript" no se puede mostrar D:
      console.log(message)
    }

    console.log(message)
  }
 // Llama a la función
  displayMessage();

// conclusion : Al usar var, me di cuenta que la variable tiene alcance de toda la función y sí se puede redeclarar sin problema en el mismo scope. pero con let la variable solo existe dentro del bloque donde fue declarada (dentro de un if) y no permite volver a declararla en el mismo scope porque da error
// el hoisting usa var, se eleva y vale undefined antes de declararse; let se eleva pero no se puede usar hasta declararla.
