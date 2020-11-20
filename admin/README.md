# Bar.io

<!-- TOC -->

- [Bar.io](#bario)
  - [Introducción](#introducción)
  - [Requisitos](#requisitos)
  - [Instalación](#instalación)
  - [Estructura del proyecto](#estructura-del-proyecto)
  - [Ficheros más destacables](#ficheros-más-destacables)
  - [Package.json](#packagejson)
  - [Testing](#testing)
  - [Paquetizado](#paquetizado)
  - [Servidor de desarrollo](#servidor-de-desarrollo)
  - [Documentación con react-styleguidist](#documentación-con-react-styleguidist)
  - [Verificación de código con Prettier](#verificación-de-código-con-prettier)
  - [Lintado de código con Eslint](#lintado-de-código-con-eslint)
  - [Versionado package.json](#versionado-packagejson)
  - [Commit](#commit)
  - [Webpack](#webpack)
    - [Análisis de Archivos](#análisis-de-archivos)
    - [Scripts](#scripts)
  - [Jest](#jest)
  - [Cypress](#cypress)
  - [Upgrade Webpack](#upgrade-webpack)
  - [Docker](#docker)

<!-- /TOC -->

## Introducción

Código base de una aplicación basada en React creada con nuestro generador.

Este código sirve de base para las aplicaciones generadas a partir del generador basado en Yeoman.

## Requisitos

Los requisitos mínimos y obligatorios para ejecutar correctamente el generador son:

- NPM

- [Git](https://git-scm.com/)

- Yarn

La recomendación es tener todos instalados en sus últimas versiones LTS.

## Instalación

- Ejecución de script de instalación.

  ```bash
  $ npm install
  $ npm audit fix --force
  Done!
  ```

## Estructura del proyecto

La estructura del proyecto base es la siguiente:

```
.
├── LICENSE
├── README.md
├── commitlint.config.js
├── config
│    ├── test
│    │   ├── jest.js
│    │   └── setup.ts
│    └── webpack
│        ├── analyze.js
│        ├── base.js
│        ├── dev.js
│        ├── helpers.js
│        └── prod.js
├── dev.env
├── global.types.d.ts
├── package-lock.json
├── package.json
├── prod.env
├── src
│    ├── app.spec.tsx
│    ├── app.tsx
│    ├── assets
│    │   ├── favicon.ico
│    │   └── notFoundImage.png
│    ├── common
│    │   └── dummy-file.js
│    ├── common-app
│    │   ├── list-cell
│    │   │   ├── index.ts
│    │   │   ├── list-cell.component.spec.tsx
│    │   │   ├── list-cell.component.tsx
│    │   │   ├── list-cell.styles.ts
│    │   │   ├── list-cell.vm.ts
│    │   │   ├── list-simple-cell.component.spec.tsx
│    │   │   └── list-simple-cell.component.tsx
│    │   ├── list-item
│    │   │   ├── index.ts
│    │   │   ├── item-list-custom.component.spec.tsx
│    │   │   ├── item-list-custom.component.tsx
│    │   │   ├── item-list-span.component.spec.tsx
│    │   │   ├── item-list-span.component.tsx
│    │   │   ├── item-list.component.spec.tsx
│    │   │   ├── item-list.component.tsx
│    │   │   ├── item-list.styles.ts
│    │   │   └── item-list.vm.ts
│    │   ├── span-group
│    │   │   ├── index.ts
│    │   │   ├── span-group.component.spec.tsx
│    │   │   ├── span-group.component.tsx
│    │   │   ├── span-group.styles.ts
│    │   │   └── span-group.vm.ts
│    │   └── title
│    │       ├── index.ts
│    │       ├── title.component.spec.tsx
│    │       └── title.component.tsx
│    ├── core
│    │   ├── router
│    │   │   ├── index.ts
│    │   │   ├── router.component.tsx
│    │   │   └── routes.ts
│    │   └── theme
│    │       ├── index.ts
│    │       ├── theme-provider.component.tsx
│    │       ├── theme.ts
│    │       └── theme.vm.ts
│    ├── index.html
│    ├── index.tsx
│    ├── layouts
│    │   ├── app.layout.styles.ts
│    │   ├── app.layout.tsx
│    │   ├── centered.layout.styles.ts
│    │   ├── centered.layout.tsx
│    │   └── index.ts
│    ├── pods
│    │   └── init
│    │       ├── index.ts
│    │       ├── init.component.spec.tsx
│    │       ├── init.component.tsx
│    │       ├── init.container.spec.tsx
│    │       ├── init.container.tsx
│    │       └── useWhyDidUpdate.ts
│    └── scenes
│        ├── index.ts
│        └── init.scene.tsx
├── tsconfig.json
├── yarn-error.log
└── yarn.lock

18 directories, 69 files

```

## Ficheros más destacables

Como ficheros a destacar dentro del proyecto base tenemos los siguientes:

| Ficheros/Carpeta      | Descripción                                                                        |
| --------------------- | ---------------------------------------------------------------------------------- |
| cypress.json          | Fichero de configuración para nuestros test end-to-end.                            |
| /environments         | Carpeta donde se encuentran nuestros ficheros de propiedades por entornos.         |
| .eslintrc.js          | Fichero de configuración para lintado con eslint.                                  |
| .prettierrc           | Fichero de configuración para lintado con prettier.                                |
| .commitlint.config.js | Fichero de configuración de lintado de commit.                                     |
| \*.env                | Fichero de variables de entorno por entorno                                        |
| global.types.d.ts     | Fichero de declaración de variables globales (typescript)                          |
| package.json          | Fichero que describe la totalidad de nuestra aplicación NPM (ver apartado propio). |
| tsconfig.json         | Fichero de configuración de Typescript                                             |

## Package.json

El fichero package.json es el fichero que define la totalidad del proyecto en el que estamos
trabajando.

La definición del fichero que existe en nuestro proyecto base es el siguiente:

```json
{
  "name": "bar.io",
  "version": "0.1.0",
  "description": "",
  "homepage": "",
  "repository": {
    "type": "git"
  },
  "license": "MIT",
  "author": "Lemoncode",
  "main": "index.js",
  "scripts": {
    "analyze": "npm run clean && npm run type-check && webpack --config ./config/webpack/analyze.js",
    "build": "run-p -l type-check build:prod",
    "test:e2e": "npm run dev -- start:e2e",
    "start:e2e": "cypress open",
    "build:prod": "npm run clean && webpack --config ./config/webpack/prod.js",
    "clean": "rimraf dist",
    "precommit": "run-s format:fix lint",
    "commit": "npx cz",
    "dev": "run-p -l type-check:watch start:dev",
    "format:fix": "pretty-quick --staged",
    "lint": "eslint src --ext .ts,.tsx",
    "lint:fix": "npm run lint -- --fix",
    "prepublishOnly": "npm run build:prod",
    "prettier": "prettier {config,src}/**/*{.js,.jsx,.ts,.tsx} --write",
    "prettier:fix": "npm run prettier",
    "release": "standard-version",
    "server": "http-server dist",
    "start": "npm run build",
    "start:dev": "webpack-dev-server --config ./config/webpack/dev.js",
    "test": "jest -c ./config/test/jest.js --verbose",
    "test:watch": "npm run test -- --watchAll -i",
    "type-check": "tsc --noEmit",
    "type-check:watch": "npm run type-check -- --watch"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "package.json": ["npx sort-package-json"],
    "src/**/*.{ts,tsx}": ["pretty-quick — staged"]
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
  "dependencies": {
    "@material-ui/core": "^4.10.1",
    "@material-ui/icons": "^4.9.1",
    "emotion": "^10.0.27",
    "http-server": "^0.12.3",
    "lodash.merge": "^4.6.2",
    "mocha-junit-reporter": "^2.0.0",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-hot-loader": "^4.12.18",
    "react-router-dom": "^5.2.0",
    "regenerator-runtime": "^0.13.3"
  },
  "devDependencies": {
    "@babel/cli": "^7.7.4",
    "@babel/core": "^7.7.4",
    "@babel/preset-env": "^7.7.4",
    "@babel/preset-react": "^7.7.4",
    "@babel/preset-typescript": "^7.7.4",
    "@commitlint/cli": "^11.0.0",
    "@commitlint/config-conventional": "^11.0.0",
    "@hot-loader/react-dom": "^16.11.0",
    "@testing-library/cypress": "^7.0.1",
    "@testing-library/jest-dom": "^5.11.5",
    "@testing-library/react": "^11.1.0",
    "@testing-library/react-hooks": "^3.2.1",
    "@testing-library/user-event": "^12.1.10",
    "@types/jest": "^26.0.15",
    "@types/react": "^16.9.13",
    "@types/react-dom": "^16.9.4",
    "@types/react-router-dom": "^5.1.5",
    "@typescript-eslint/eslint-plugin": "^2.9.0",
    "@typescript-eslint/parser": "^2.9.0",
    "babel-loader": "^8.0.6",
    "babel-plugin-emotion": "^10.0.23",
    "css-loader": "^3.2.0",
    "cypress": "^5.5.0",
    "cz-conventional-changelog": "^3.3.0",
    "dotenv-webpack": "^1.7.0",
    "eslint": "^6.7.1",
    "eslint-config-prettier": "^6.7.0",
    "eslint-plugin-prettier": "^3.1.1",
    "eslint-plugin-react": "^7.16.0",
    "eslint-plugin-react-hooks": "^4.0.8",
    "file-loader": "^5.0.2",
    "html-webpack-plugin": "^3.2.0",
    "identity-obj-proxy": "^3.0.0",
    "jest": "^24.9.0",
    "jest-emotion": "^10.0.32",
    "jest-transform-stub": "^2.0.0",
    "lint-staged": "^9.5.0",
    "mini-css-extract-plugin": "^0.8.0",
    "mochawesome": "^6.1.1",
    "mochawesome-merge": "^4.2.0",
    "mochawesome-report-generator": "^5.1.0",
    "npm-run-all": "^4.1.5",
    "prettier": "^1.19.1",
    "pretty-quick": "^2.0.1",
    "react-test-renderer": "^16.12.0",
    "rimraf": "^3.0.0",
    "style-loader": "^1.0.1",
    "ts-jest": "^24.2.0",
    "typescript": "^3.7.2",
    "url-loader": "^3.0.0",
    "webpack": "^4.41.2",
    "webpack-bundle-analyzer": "^3.6.0",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0",
    "webpack-merge": "^4.2.2"
  }
}
```

| Sección del fichero | Descripción                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| name                | Nombre del proyecto.                                                                                              |
| version             | Versión del proyecto que estamos desarrollando.                                                                   |
| scripts             | Conjunto de scripts NPM que ejecutan ciertas tareas asociadas.                                                    |
| Dependencies        | Dependencias que son requeridas para la correcta ejecución de nuestra aplicación.                                 |
| DevDepencies        | Dependencias que son requeridas solo en tiempo de desarrollo. No estarán incluidas dentro del distribuible final. |

## Testing

Dentro del proyecto base se crearán por defecto configuraciones para dos tipos de testing distintos,
tendremos test tanto unitarios como end-to-end.

Los test unitarios se ejecutaran bajo Jest y los test end-to-end serán ejecutados con Cypress.

Para la ejecución de los test tenemos disponibles dos scripts distintos

Ejecución de test unitarios:

```bash
npm run test
npm run test:coverage
npm run test:watch
```

Ejecución de test end-to-end:

```bash
npm run start:e2e
```

Ambas ejecuciones crearán diversas carpetas al ejecutarse y ejecutar los test correctamente.

Los test unitarios crearán una carpeta "coverage", en la cual tendremos disponibles los reportes de
cobertura de nuestros test unitarios

Los test end-to-end crearán una carpeta "cypress/results", en la cual tendremos disponibles los
informes sobre la ejecución de nuestros test end-to-end.

## Paquetizado

Dentro de nuestra aplicación base tenemos disponibles dos modos distintos de paquetizado,
dependientes del entorno donde se quiera ejecutar la aplicación

En caso de que se quiera generar el distribuible par ser desplegado en producción ejecutaremos el
siguiente comando:

```bash
npm start
```

Ambos comandos nos generarán una carpeta "dist" dentro del raíz de nuestro proyecto, en la que
encontraremos la aplicación preparada para desplegar en un servidor.

Nótese de que la ejecución de estos comandos generará una aplicación con las propiedades
determinadas por cada entorno, es decir, si ejecutamos el script para generar la aplicación de
desarrollo, usaremos el environments de desarrollo, pero si ejecutamos el script para producción,
usaremos el fichero de propiedades de producción.

## Servidor de desarrollo

Dentro de la aplicación base tenemos un script que lanzará un servidor en local para usar en tiempo
de desarrollo.

Para lanzar el servidor de desarrollo tenemos que ejecutar el siguiente comando, el cual nos abrirá
automáticamente una pestaña dentro de nuestro navegador con nuestra aplicación ejecutándose.

```bash
npm run dev
```

En caso de que queramos abrir la URL manualmente en otro navegador, la URL por defecto que se expone
al ejecutar el servidor de desarrollo es la siguiente:

```
http://localhost:8080
```

## Documentación con react-styleguidist

// TODO

## Verificación de código con Prettier

Primero incluya en el archivo .prettierignore los ficheros que deberán de ser obviados por prettier.
Seguidamente lance la siguiente instrucción:

```bash
npm run prettier
```

## Lintado de código con Eslint

Primero incluya en el archivo .eslintignore los ficheros que deberán de ser obviados por eslint.
Seguidamente lance la siguiente instrucción:

```bash
npm run lint:fix
```

Este comando, reparará todos los errores posibles, y mostrará en consola los errores que hace falta
arreglarse de manera manual

## Versionado package.json

| install         | Libreria                         | Version  |
| --------------- | -------------------------------- | -------- |
| dependencies    | @material-ui/core                | ^4.10.1  |
| dependencies    | @material-ui/icons               | ^4.9.1   |
| dependencies    | emotion                          | ^10.0.27 |
| dependencies    | http-server                      | ^0.12.3  |
| dependencies    | lodash.merge                     | ^4.6.2   |
| dependencies    | mocha-junit-reporter             | ^2.0.0   |
| dependencies    | react                            | ^16.12.0 |
| dependencies    | react-dom                        | ^16.12.0 |
| dependencies    | react-hot-loader                 | ^4.12.18 |
| dependencies    | react-router-dom                 | ^5.2.0   |
| dependencies    | regenerator-runtime              | ^0.13.3  |
| devDependencies | @babel/cli                       | ^7.7.4   |
| devDependencies | @babel/core                      | ^7.7.4   |
| devDependencies | @babel/preset-env                | ^7.7.4   |
| devDependencies | @babel/preset-react              | ^7.7.4   |
| devDependencies | @babel/preset-typescript         | ^7.7.4   |
| devDependencies | @commitlint/cli                  | ^11.0.0  |
| devDependencies | @commitlint/config-conventional  | ^11.0.0  |
| devDependencies | @hot-loader/react-dom            | ^16.11.0 |
| devDependencies | @testing-library/cypress         | ^7.0.1   |
| devDependencies | @testing-library/jest-dom        | ^5.11.5  |
| devDependencies | @testing-library/react           | ^11.1.0  |
| devDependencies | @testing-library/react-hooks     | ^3.2.1   |
| devDependencies | @testing-library/user-event      | ^12.1.10 |
| devDependencies | @types/jest                      | ^26.0.15 |
| devDependencies | @types/react                     | ^16.9.13 |
| devDependencies | @types/react-dom                 | ^16.9.4  |
| devDependencies | @types/react-router-dom          | ^5.1.5   |
| devDependencies | @typescript-eslint/eslint-plugin | ^2.9.0   |
| devDependencies | @typescript-eslint/parser        | ^2.9.0   |
| devDependencies | babel-loader                     | ^8.0.6   |
| devDependencies | babel-plugin-emotion             | ^10.0.23 |
| devDependencies | css-loader                       | ^3.2.0   |
| devDependencies | cypress                          | ^5.5.0   |
| devDependencies | cz-conventional-changelog        | ^3.3.0   |
| devDependencies | dotenv-webpack                   | ^1.7.0   |
| devDependencies | eslint                           | ^6.7.1   |
| devDependencies | eslint-config-prettier           | ^6.7.0   |
| devDependencies | eslint-plugin-prettier           | ^3.1.1   |
| devDependencies | eslint-plugin-react              | ^7.16.0  |
| devDependencies | eslint-plugin-react-hooks        | ^4.0.8   |
| devDependencies | file-loader                      | ^5.0.2   |
| devDependencies | html-webpack-plugin              | ^3.2.0   |
| devDependencies | identity-obj-proxy               | ^3.0.0   |
| devDependencies | jest                             | ^24.9.0  |
| devDependencies | jest-emotion                     | ^10.0.32 |
| devDependencies | jest-transform-stub              | ^2.0.0   |
| devDependencies | lint-staged                      | ^9.5.0   |
| devDependencies | mini-css-extract-plugin          | ^0.8.0   |
| devDependencies | mochawesome                      | ^6.1.1   |
| devDependencies | mochawesome-merge                | ^4.2.0   |
| devDependencies | mochawesome-report-generator     | ^5.1.0   |
| devDependencies | npm-run-all                      | ^4.1.5   |
| devDependencies | prettier                         | ^1.19.1  |
| devDependencies | pretty-quick                     | ^2.0.1   |
| devDependencies | react-test-renderer              | ^16.12.0 |
| devDependencies | rimraf                           | ^3.0.0   |
| devDependencies | style-loader                     | ^1.0.1   |
| devDependencies | ts-jest                          | ^24.2.0  |
| devDependencies | typescript                       | ^3.7.2   |
| devDependencies | url-loader                       | ^3.0.0   |
| devDependencies | webpack                          | ^4.41.2  |
| devDependencies | webpack-bundle-analyzer          | ^3.6.0   |
| devDependencies | webpack-cli                      | ^3.3.10  |
| devDependencies | webpack-dev-server               | ^3.9.0   |
| devDependencies | webpack-merge                    | ^4.2.2   |

## Commit

Se ha instalado una herramienta para gestionar los commits (`commitizen`) y un linter de commits
(`commitlint`), con en fin de que cuando se genere una release, pueda obtener toda la información de
los commits, y generar un fichero de `CHANGELOG.md`, por lo que se ha generado un script del
`package.json` para que arranque dicha herramienta. Previamente al `commit` se ejecuta un
`precommit` que pasa unas reglas de estilo y lintado al código (`code styling and code linter`).

Para poder ejecutar dicho comando, se puede ejecutar de dos formas:

```bash
$ npm run commit
```

que ejecutará previamente el comando `precommit`

o, otra forma, es mediante `git`:

```bash
$ git cz
```

En ambos casos se ejecutan el precommit, y es necesario para la correcta generación del archivo
`CHANGELOG.md`.

## Webpack

La construcción de proyecto se realiza mediante webpack 5. Los cambios sobre todo son en la librería
`webpack-cli` y el uso de `@webpack-cli/server`, que envuelve el paquete `webpack-dev-server` y hace
uso de él para levantar el servidor.

La forma de configurar el paquete `webpack-merge` también cambia, y se ha hecho una nueva
configuración para que pueda cargar previamente la librería `react-hot-loader/patch`

Tenemos un archivo individual para cada entorno de desarrollo (`development` y `production`), uno
para analizado de bundle (`analyze`), uno de `helpers` y un `base` para todos

> Árbol de directorio:

```tree
config
├── test
│    ├── jest.js
│    └── setup.ts
└── webpack
    ├── analyze.js
    ├── base.js
    ├── dev.js
    ├── helpers.js
    └── prod.js

2 directories, 7 files


```

El fichero `base.js` es el fichero que tiene la configuración base para todo los entornos. El
fichero `dev` es el fichero que tiene la configuración para desarrollo. El fichero `prod` es el
fichero que tiene la configuración para producción. El fichero `analyzed` es el fichero que tiene la
configuración para el analizado de bundle. El fichero `helper,js` son simples funciones de ayuda,
esta preparado por si hubiera que agregar más variables necesarias para `webpack` y de ese modo, que
la configuración de `webpack` quede lo más limpia posible para su posterior modificación.

### Análisis de Archivos

Se tienen los siguientes archivos dentro de `config/webpack`:

| Archivo     | Descripción                                        |
| ----------- | -------------------------------------------------- |
| base.js     | configuracion base para todas las construcciones   |
| dev.js      | configuracion de arranque de desarrollo de webpack |
| prod.js     | configuracion de arranque de produccion de webpack |
| analyzed.js | configuracion de arranque de analizado de webpack  |
| helpers.js  | helpers para webpack                               |

Para cambiar el puerto en el que se despliega el servidor local, se tiene que modificar el archivo
`dev.js` y cambiar la propiedad

```javascript
    devServer: {
      inline: true,
      host: 'localhost',
      port: 8080,  // <------ Change this number
      stats: 'minimal',
      hot: true,
      compress: true,
      contentBase: helpers.resolveFromRootPath('dist'),
    },
```

Distintos Ejemplos de construcción:

Development:

```bash
 $ npm run build
```

Production:

```bash
 $ npm run build --prod
```

### Scripts

Se han agregado los siguientes `scripts` en el `package.json` del proyecto:

- `start`: Genera el paquetizado de la aplicación por defecto.
- `build:prod`: Genera el paquetizado de la aplicación en modo producción.
- `prepublishOnly`: ejecuta previamente el script comando `npm run build:prod` cuando se llama al
  comando `npm publish`.
- `start:dev`: Levantar la aplicación en modo desarrollo.
- `analyze`: Levanta el proyecto de analizar el bundle.
- `release`: Genera una nueva release del proyecto.
- `test`: Ejecuta los unit test del proyecto.
- `test:e2e`: Ejecuta los test e2e del proyecto.

## Jest

// TODO

## Cypress

// TODO

## Upgrade Webpack

// TODO

## Docker

Se ha agregado una imagen docker al proyecto:

```dockerfile
FROM node:12-alpine AS base

RUN mkdir -p /usr/app

WORKDIR /usr/app

# Prepare static files
FROM base as build-front
COPY ./ ./

RUN npm install
RUN npm start

# Release
FROM base AS release
COPY --from=build-front /usr/app/dist ./public
COPY ./server/package.json ./
COPY ./server/index.js ./

RUN npm install --only=production

ENV PORT=8083
ENV STATIC_FILES_PATH=./public
EXPOSE 8083

ENTRYPOINT ["node", "index.js"]

```

La cual construye y ejecuta la aplicación con un servidor de estáticos (`ExpressJS`).

Los comandos para ejecutar la imagen son:

- **Construcción de la imagen en local**:

```bash
$ docker build -t petshop .
```

> El flag `-t` le agrega un tag a la imagen creada

- **Levantar imagen Docker**

```bash
$ docker run -rm -p 8080:8083 petshop
```

> El flag -rm borra los contenedores creados intermedios después de que haya construido
> satisfactoriamente. El flag -p mapea el puerto de salida de nuestro contenedor al puerto que le
> indiquemos.
