// Objetos, clases y operadores avanzados

/*
1) Crea un array con 10 objetos, donde cada objeto represente 
un automóvil con la siguiente información:

Marca
Modelo
Año
Color

2) Usa un método de array para recorrer la lista e 
imprime por consola todos los datos de los automóviles 
cuyo año sea mayor a 2018.

Misión 2:

1. Crea una función que recorra el array de automóviles.

2. Usa destructuring dentro de la función para obtener el color de cada automóvil.

3. La función debe aceptar un color como parámetro y devolver por consola cuántos automóviles tienen ese color.
*/ 

class Automóvil{
    constructor(id, marca,modelo,anio,color){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
}

let marcas = ["Toyota","Mazda","Mitsubishi","Renault","Fiat","Chevrolet","BMW","Alpha Romeo","Audi","Nissan"];
let modelos = ["Supra","RX7","Eclipse","12","Cronos","Corvette ZRI","Serie 5 GT","GTV","TT","Skyline GT-R R32"];
let anios = ["2025","2004","1998","1969","2020","2026","2009","2022","2023","1995"];
let colores = ["Rojo","Verde","Negro","Azul","Blanco","Naranja","Turquesa","Gris","Bordo","Dorado"];
const autos = [];

const cantidadTotal = marcas.length;

for (let i = 0; i < cantidadTotal; i++) {
    let nuevoAuto = new Automóvil(
        i + 1,   
        marcas.shift(),      
        modelos.shift(),     
        anios.shift(),       
        colores.shift()     
    );
    autos.push(nuevoAuto);
}

console.log(autos)