# alive_2021_2
Utilizaremos este repositorio para concentrar los archivos vistos en clase y los trabajados en individual


# Instrucciones

Es necesario crear una copia del repositorio en sus máquinas para poder subir los avances a un mismo lugar.

A continuación se listan los pasos a seguir para esta manera de trabajo.

### Clonar repositorio
1. Abre tu terminal en la carpeta de tu preferencia
1. Ejecuta la siguiente línea para crear una copia del repo en tu computadora

        git clone https://github.com/Kachyz/alive2021_2.git

1. Entra a la carpeta que se acaba de crear **alive2021_2**

        cd alive2021_2

### Crear una 'rama' propia
1. Abre tu terminal en la carpeta del repositorio **alive2021_2**
1. Una vez dentro de la carpeta crearemos una rama propia con nuestro nombre para poderla identificar
    * NO utilizaremos espacios para nuestro nombre, usaremos guiones en su lugar
    * La siguiente línea es la que necesitamos (cambiando el nombre)
    * Noten que existe un `-b` antes del nombre, esto es para que _git_ sepa que estamos creando una rama

          git checkout -b carlos-estrada

    * Les aparecerá un mensaje con el siguiente

          Switched to a new branch 'carlos-estrada'

1. Podemos ver en cualquier momento que rama estamos utilizando desde nuestro editor o con el siguiente comando

        git branch

Creamos una rama para poder tener los mismo archivos que existen en el repo, modificarlos y subirlos sin afectar el trabajo de los demás.

### Subir nuestros cambios
Este proceso ya es mas conocido
1. Abre tu terminal en la carpeta del repositorio
1. Agrega todos tus cambios al 'paquete' que vamos a subir

        git add .

1. Guarda tu paquete, recuerda agregar un mensaje al mismo

        git commit -m 'Ejercicios de arreglos terminados'

1. Sube tu paquete al repositorio. **OJO** esta instrucción es un poco diferente a la que regularmente usamos
    * Al final no usamos _master_ porque esa es una rama diferente a la nuestra
    * Debemos especificar el nombre de nuestra rama, tomando el ejemplo anterior sería de esta manera

          git push origin carlos-estrada

1. En este punto podrías ver tus cambios en el repositorio.

***

## Importante

Recuerda que ante cualquier complicación puedes notificar a los coaches para resolverla lo antes posible.

Trata de subir de manera recurrente tus avances para monitorear tu progreso.
