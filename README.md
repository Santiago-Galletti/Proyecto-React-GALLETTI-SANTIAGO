# Marvel movies E-Commerce

## Descripción
Esta es una app de e-commerce de peliculas de marvel que se creo a partir de Create React App. Su finalidad es lograr una experiencia de usuario completa que simule la situación de compra de principio a fin.

## Como?
- Se utilizaron distintos componentes para modularizar toda la app.
- Las rutas y los links se hicieron con create-react-dom.
- Se usaron Hooks tales como: useState, useEffect, useParams y useContext.
- Se trabajó un CartContext para transportar la informacion del carrito a varios componentes.
- Se utilizó una Base de Datos de Firebase para guardar la informacion de nuestros productos y la de las ordenes de compra.ó
- Se realizó un control de stock real en la base de datos que se modifica con cada compra realizada.

## Instalación del proyecto
Queres clonar este repositorio? No hay problema es muy sencillo!
- Paso 1: Crea una carpeta y dentro de ella abri tu CMD y ejecuta el siguiente codigo:
`git clone https://github.com/Santiago-Galletti/Proyecto-React-GALLETTI-SANTIAGO.git`.
Esto te dejará descargado el repositorio en esa carpeta.

- Paso 2: Entra en tu VSC o tu editor de codigo y abre la carpeta.

- Paso 3: Abre la consola del VSC y ejecuta el siguiente comando:
`npm install`
Esto instalará todos los paquetes y las dependencias necesarias para levantar el proyecto.

- Paso 4: Ya teniendo todo listo ejecuta `npm run start` y tendrás la app funcionando en tu localhost!

CONSEJO! POR LAS DUDAS ASEGURA DE TENER TODAS ESTAS DEPENDENCIAS EN TU package.json:

`"dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.1.2",
    "@fortawesome/free-regular-svg-icons": "^6.1.2",
    "@fortawesome/free-solid-svg-icons": "^6.1.2",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@testing-library/jest-dom": "^5.16.4",
    "@testing-library/react": "^13.3.0",
    "@testing-library/user-event": "^13.5.0",
    "firebase": "^9.9.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "sweetalert": "^2.1.2",
    "web-vitals": "^2.1.4"
  }`