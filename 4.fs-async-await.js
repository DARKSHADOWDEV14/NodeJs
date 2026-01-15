const { readFile } = require("node:fs/promises");

// Método de asincronia, este forma no funcionaría debido a que hay que llamar a EcmaScript y se debe envolver en función autoinvocada

// IIFE = Inmediatly Invoked Function Expressions
// sincrono, asincrono, secuencial, asincrono en paralelo.

(async () => {
  console.log("leyendo el primer archivo...");
  const text = await readFile("./archivo.txt", "utf-8");
  console.log("primer texto", text);

  console.log("Haciendo cosas mientras lee el archivo");

  console.log("Leyendo el segundo archivo....");

  const text2 = await readFile("./archivo2.txt", "utf-8");
  console.log("segundo texto:", text2);
})();
