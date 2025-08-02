# Clean Monorepo

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![React Router Badge](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=for-the-badge)![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge)![Mongoose Badge](https://img.shields.io/badge/Mongoose-F04D35?logo=mongoosedotws&logoColor=fff&style=flat-square)![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=fff&style=for-the-badge)![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)![Google Gemini Badge](https://img.shields.io/badge/Google%20Gemini-8E75B2?logo=googlegemini&logoColor=fff&style=flat-square)

Este repositorio es un monorepo gestionado con Yarn Workspaces que contiene dos paquetes principales: un backend y un frontend, ambos construidos siguiendo principios de Clean Architecture y basados en el stack MERN.

## Tecnologías Principales

- **Gestor de Paquetes:** Yarn Workspaces
- **Backend:** Node.js, Express, TypeScript, MongoDB, Redis
- **Frontend:** React, Vite, TypeScript, Tailwind CSS
- **Contenerización:** Docker

## Estructura del Proyecto

El monorepo se organiza en la carpeta `project/`, donde cada subcarpeta es un workspace independiente.

-   `project/api`: Un servicio de backend que se encarga de la lógica de negocio, la API y la comunicación con la base de datos.
-   `project/app`: Una aplicación de frontend que se encarga de la interfaz de usuario y la interacción con el cliente.

## Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

-   [Node.js](https://nodejs.org/) (v18 o superior)
-   [Yarn](https://yarnpkg.com/) (v1.22 o superior)
-   [Docker](https://www.docker.com/) (Opcional, para ejecutar el backend en un contenedor)

## Cómo Empezar

### 1. Instalación de Dependencias

Para instalar todas las dependencias de todos los paquetes (workspaces), ejecuta el siguiente comando **desde la raíz del proyecto**:

```bash
yarn install
```

Este comando leerá los `package.json` de cada workspace y de la raíz, instalando todo lo necesario.

### 2. Configuración de Variables de Entorno

Cada paquete tiene su propio archivo de variables de entorno. Deberás crearlos a partir de los archivos de ejemplo.

-   **Backend:** Copia `project/api/.env.example` a `project/api/.env` y ajusta las variables (puerto, URLs de bases de datos, secretos de JWT, etc.).
-   **Frontend:** Copia `project/app/.env.example` a `project/app/.env` y configura la URL del backend (`VITE_API_URL`).

### 3. Ejecutar los Proyectos en Modo Desarrollo

Para ejecutar un script de un workspace específico, se utiliza el comando `yarn workspace <nombre_del_workspace> <script>`.

**Para iniciar el backend:**

```bash
yarn workspace api dev
```

**Para iniciar el frontend:**

```bash
yarn workspace app dev
```

## Manejo de Dependencias en Workspaces

**Añadir una dependencia a un workspace específico:**

```bash
# Ejemplo: añadir axios solo al frontend
yarn workspace app add axios
```

**Añadir una dependencia de desarrollo a un workspace específico:**

```bash
# Ejemplo: añadir jest solo al backend
yarn workspace api add jest -D
```

**Añadir una dependencia a la raíz (para todos los workspaces):**

```bash
# Útil para herramientas como prettier o eslint
yarn add prettier -W -D
```

-   La bandera `-W` (o `--ignore-workspace-root-check`) permite añadir la dependencia a la raíz del proyecto.

## Docker (Backend)

El backend incluye un `Dockerfile` para facilitar la contenerización.

**Construir la imagen de Docker:**

```bash
docker build -t clean-backend .
```

**Ejecutar el contenedor:**

```bash
docker run -p 4000:4000 -d --name my-clean-backend-container clean-backend
```

## Puntos Clave a Recordar

1.  **Comandos desde la Raíz:** Ejecuta siempre `yarn install` y los comandos `yarn workspace ...` desde la raíz del monorepo.
2.  **Dependencias Hoisted:** Yarn intentará "elevar" (hoist) las dependencias comunes a la carpeta `node_modules` de la raíz para optimizar el espacio.
3.  **Scripts:** Revisa el archivo `package.json` de cada workspace para ver todos los scripts disponibles (`build`, `test`, `lint`, etc.).
