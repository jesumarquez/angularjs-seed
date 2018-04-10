# angularjs-seed
Estructura básica de una aplicación [AngularJs](https://docs.angularjs.org/guide).

Es una aplicación de ejemplo que permite la administración de clientes. 

![screenshot.png](/screenshot.png "Screenshot")

La aplicación está separada en módulos para una mejor organización del código.

## Requerimientos
Necesita [Nodejs](https://nodejs.org/) para la ejecución del backend.

## Instalación
    npm install

## Ejecución
    npm start

## API
### GET
    api/customers

### POST
    api/customers

#### body:

    {
        name: 'nombrecliente'
    }

### PATCH
    api/customers/id

#### body:

    {
        name: 'nombrecliente'
    }

### DELETE
    api/customers/id
