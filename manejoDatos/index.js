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
            }
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
            }
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
