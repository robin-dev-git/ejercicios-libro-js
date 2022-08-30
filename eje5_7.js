let cadena = "En un lugar de la mancha";

console.log("Cadena:", cadena);
console.log("Posición de la cadena \"lugar\" (indexOf):", cadena.indexOf("lugar"));
console.log("Posición de la cadena \"lugar\" (search):", cadena.search("lugar"));

cadena = "¿En qué lugar aparece la palabra \"lugar\"?";

console.log("Cadena:",cadena);
console.log("indexOf \"lugar\" sin segundo parámetro:", cadena.indexOf("lugar"));
console.log("indexOf \"lugar\" con segundo parámetro 20:", cadena.indexOf("lugar", 20));
console.log("lastIndexOf \"lugar\" sin segundo parámetro:", cadena.lastIndexOf("lugar"));
console.log("lastIndexOf \"lugar\" con segundo parámetro 20:", cadena.lastIndexOf("lugar", 20));
