const array_prueba_1= ["alex","juan", 5 , "franco"]


console.log(array_prueba_1[0]);

const array_prueba_2 = {
    nombre: "alex",
    apellido: "franco",
    gmail:"alex@gmail.com"
}
console.log(array_prueba_2.nombre);
console.log(array_prueba_2["apellido"]);

const [nombre, apellido, gmail] = ["alex","franco","alex@gmail.com"];
console.log(nombre);
console.log(apellido);
console.log(gmail);



const prueba_objeto_1 = {
    nombre: "sayayin",
    apellido: "goku",
    gmail: "sayayin@gmail.com"
}
console.log(prueba_objeto_1.apellido);
console.log(prueba_objeto_1.gmail);
console.log(prueba_objeto_1.nombre);



const prueba_objeto_2 = [
    {
        nombre: "juan",
        apellido: "perez",
        gmail: "juan@gmail.com"
    },
    {
        nombre: "alex",
        apellido: "franco",
        gmail: "alex@gmail.com"
    },
    {
        nombre: "franco",
        apellido: "gomez",
        gmail: "franco@gmail.com"
    }
]
console.log(prueba_objeto_2[0].apellido);
console.log(prueba_objeto_2[1]);
console.log(prueba_objeto_2[2].nombre);

const {nombre, apellido, gmail} = prueba_objeto_2[0];
console.log(nombre);
console.log(apellido);
console.log(gmail);