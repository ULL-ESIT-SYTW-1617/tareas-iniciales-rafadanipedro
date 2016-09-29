## NPM
**NPM** es el gestor de paquetes para Javascript que se utiliza para instalar en Node los paquetes o librerías que se vayan a utilizar en una aplicación. Cuando se utiliza npm, se instala una dependecia
en un proyecto que permite utilizarlo en la aplicación que se este desarrollando. Para la comprobación de que el comando npm funcion correctamente, se utilizará para la instalación del paquete express de
Node JS.

## Express

**Express** es un framework web que se utiliza en **Node JS** para crear aplicaciones webs. Express esta basado en [Connect](https://github.com/senchalabs/connect),que es un framework de manejo de servidores
HTTP el cual provee plugins de alto rendimiento conocidos como **middleware**. Un middleware es  un software que asiste a una aplicación para interactuar o comunicarse con otras aplicaciones, software, redes, hardware y/o sistemas operativos.
Para instalar express.js en el sistema de manera global se debe utilizar el siguiente comando:

`sudo npm install -g express`

Esto lo que hará, es crear una dependencia en el proyecto con el paquete express en la versión que se haya descargado.

## Package.json

**Package.json** es el fichero que se crea para indicar las dependecias o paquetes que se están utilizando en un proyecto. Este fichero, tiene el formato **JSON** que  es un formato de texto ligero para intercambio de datos. Un fichero JSON se
caracteriza porque tiene los datos incluido entre {  }.
Una característica que utiliza el fichero Package.json, es que  indica la version del paquete que se instala en un proyecto mediante el sistema de versionado semántico (x.y.z).
Para crear un fichero json hay que utilizar el siguiente comando:

`npm init`
