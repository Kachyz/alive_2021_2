let info = {
    statusCode: 200,
    data: [
        {
          nombre: 'Sofía',
          ciudad: 'Oaxaca',
          mascotas: [
            {
              nombre: 'El michis',
              especie: 'Gato',
              edad: 2,
            },
            {
              nombre: 'Solovino',
              especie: 'Perro',
              edad: 4,
            },
            {
              nombre: 'Panchito',
              especie: 'Puma',
              edad: 11
            },
            {
              nombre: 'Squit',
              especie: 'Paloma',
              edad: 3
            },
            {
              nombre: 'Tchalla',
              especie: 'Pantera',
              edad: 1
            },
            {
              nombre: 'Pancho',
              especie: 'Pantera',
              edad: 18
            },
            {
              nombre: 'Toño',
              especie: 'Tigre',
              edad: 14
            }
          ]
        },
        {
          nombre: 'Laura',
          ciudad: 'Tabasco',
          mascotas: [
            {
              nombre: 'Firulais',
              especie: 'Perro',
              edad: 7,
            },
            {
              nombre: 'Killer',
              especie: 'Perro',
              edad: 1,
            },
            {
              nombre: 'Scooby',
              especie: 'Perro',
              edad: 10
            },
            {
              nombre: 'Sam',
              especie: 'Tucán',
              edad: 3
            },

          ]
        },
        {
          nombre: 'América',
          ciudad: 'Guadalajara',
          mascotas: []
        },
        {
          nombre: 'Ana',
          ciudad: 'Monterrey',
          mascotas: [
            {
              nombre: 'Chocotorro',
              especie: 'Perico',
              edad: 3
            },
            {
              nombre: 'Pumba',
              especie: 'Jabalí',
              edad: 6
            }
          ]
        },
        {
          nombre: 'Diana',
          ciudad: 'Oaxaca',
          mascotas: [
            {
              nombre: 'Bagheera',
                especie: 'Pantera',
                edad: 12
            },
            {
              nombre: 'Baloo',
              especie: 'Oso',
              edad: 11
            },
            {
              nombre: 'Pato',
              especie: 'Pez',
              edad: 1
            },
          ]
        }
    ]
};

// Instrucciones:
//  * Para cada uno de los siguientes retos crea una función que cumpla con lo que el enunciado solicita.
//  * Todas las funciones deberán analizar la información descrita dentro de la variable 'info' (listada al inicio de este archivo)
//  * Una vez terminado el ejercicio crea una rama en el repositorio con tu nombre y sube tu código para evaluarlo
// IMPORTANTE
//    Cada uno de tus métodos se utilizarán junto con un bloque de información distinto para comprobar su correcto funcionamiento.
//    Por lo que es importante no utilizar código estático que pudiera afectar el resultado
//
// Retos
//  1) ¿Quién tiene más perros?

function masPerros() {

  // console.log(info);
  // Iterar sobre la cantidad de personas
  // Para cada persona buscar sus mascotas
  // Iterar sobre la cantidad de mascotas
  // Para cada mascota encontrada revisaremos si es un perro
  // Si la IF se cumple, sumamos el total de perros para esa persona

  let mayorCantPerros = 0;
  let personaMasPerros = '';

  for(let idPersona = 0; idPersona < info.data.length; idPersona++) {
    let perrosDeEstaPersona = 0
    // let persAct = info.data[idPersona];
    for(let idMascota = 0; idMascota < info.data[idPersona].mascotas.length ; idMascota++) {
      if(info.data[idPersona].mascotas[idMascota].especie === 'Perro') {
        perrosDeEstaPersona++;
      }
    } // FIN del 2do for

    // Comparar si tiene mas perros que LA que tiene mas perros
    if(perrosDeEstaPersona > mayorCantPerros){
      personaMasPerros = info.data[idPersona].nombre
      mayorCantPerros = perrosDeEstaPersona
    }
  } // FIN 1er for

  console.log('la persona con más perros es: ', personaMasPerros);
}

masPerros();









//
//  2) Crea un arreglo con todas las especies animales que se encuentres
//    * Puntos extra si NO se repiten dentro del arreglo
//
//  3) Lista todas aquellas especies que inicien con la letra 'P'
//
//  4) Queremos saber quién tiene menos animales
//
//  5) Para cada persona listada, imprime el siguiente enunciado (Cambiando los valores necesarios para cada caso)
//  "Juan tiene 4 animales, sus nombres son : Rocky, Pepe, Panchito, Milaneso"
//    * Puntos extra si el enunciado tiene manejo adecuado de singular y plural
//    * Puntos extra si el enunciado se ajusta coherentemente cuando no se tienen mascotas
