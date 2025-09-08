// Ejercicio 2: Inmutabilidad de `const`

// 1. Declara la constante `PI`
const PI = 3.14;

// 2. Intenta reasignar `PI` (esto debería causar un error)
//const PI = 3.14159; el error: SyntaxError: Identifier 'PI' has already been declared.

// 3. Declara un objeto `circle`
const circle = {radius:10};
console.log(circle.radius)
// 4. Modifica la propiedad `radius` de `circle`
circle.radius = 20;

// ¿Qué valor esperas para `radius`?
// Esperaba que me saltara un error, pero no fue así, creo que no puedo redeclarar una `const`, pero sí puedo modificar sus valores internos como `radius` en este ejemplo.
