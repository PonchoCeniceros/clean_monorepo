# Clean Backend

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=fff&style=for-the-badge)

Este es un template de backend construido con Node.js, Express y TypeScript, siguiendo los principios de Arquitectura Limpia. Está diseñado para ser robusto, escalable y fácil de mantener.

## Filosofía

*   **Separación de Responsabilidades:** El código está organizado en capas (Dominio, Aplicación, Infraestructura) para aislar la lógica de negocio de los detalles de implementación.
*   **Inversión de Dependencias:** Las capas internas no dependen de las externas. Se utilizan interfaces para invertir el control, permitiendo que los detalles (como la base de datos) se puedan intercambiar fácilmente.
*   **Enfocado en el Dominio:** La lógica de negocio es el núcleo de la aplicación y no se ve afectada por cambios en frameworks o tecnologías externas.

## Cómo Empezar

Sigue estos pasos para levantar el entorno de desarrollo:

1.  **Crear archivo de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:

    ```env
    # === GENERALES ===
    # Título y descripción para la documentación de la API
    TITLE=Clean API
    DESCRIPTION=API para el proyecto de arquitectura limpia con el stack MERN
    VERSION=0.0.1
    API_URL=http://localhost:3000/v1

    # === CONFIGURACIONES BACKEND NODEJS ===
    # Puerto en el que correrá el servidor
    PORT=3000
    # Entorno de desarrollo (development, production, etc.)
    NODE_ENV=development

    # === CREDENCIALES JWT ===
    # Clave secreta para firmar los JSON Web Tokens
    SECRET_KEY=tu_super_secreto_aqui
    # Número de rondas de salt para el hash de contraseñas con bcrypt
    SALT_ROUNDS=10

    # === CREDENCIALES DE INFRAESTRUCTURA ===
    # URI de conexión a la base de datos MongoDB
    MONGO_DB_URL=mongodb://localhost/clean_db
    # URI de conexión a Redis para el manejo de sesiones
    REDIS_SESSION_URI=redis://localhost:6379
    # Ruta del archivo para los logs de la aplicación
    LOGGER_FILE=logs/logfile.log

    # === FRONTEND Y CORS ===
    # URL del frontend permitida para realizar peticiones (CORS)
    FRONTEND_AVAILABLE_URL=http://localhost:5173
    ```

2.  **Instalar dependencias:**

    ```bash
    yarn install
    # o si usas npm
    # npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**

    ```bash
    yarn dev
    # o si usas npm
    # npm run dev
    ```

    Esto iniciará la API en modo de desarrollo. Estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura de Archivos

La estructura del directorio `src` refleja las capas de la Arquitectura Limpia:

```
/src
├───application/         # Casos de uso de la aplicación
│   └───getBussinessPartners.ts
├───auth/                # Módulo de autenticación (infraestructura)
│   ├───controllers.ts
│   ├───middlewares.ts
│   └───routes.ts
├───domain/              # Entidades y reglas de negocio del núcleo
│   ├───apiResponse.ts
│   ├───jwtPayload.ts
│   ├───role.ts
│   ├───session.ts
│   └───user.ts
├───models/              # Esquemas y modelos de la base de datos (infraestructura)
│   └───user.model.ts
├───services/            # Conectores a servicios externos (infraestructura)
│   ├───mongo.connector.ts
│   ├───redis.connector.ts
│   └───winston.connector.ts
├───api.ts               # Punto de entrada y configuración de Express
└───index.ts             # Script de inicio del servidor
```

## Arquitectura Limpia (Clean Architecture)

Este proyecto aplica los principios de la Arquitectura Limpia para lograr un sistema desacoplado y mantenible. La regla de dependencia es clave: las dependencias solo fluyen hacia adentro.

`Infraestructura -> Aplicación -> Dominio`

### 1. Capa de Dominio (El "Qué")

El núcleo de la aplicación. Contiene las entidades y la lógica de negocio que son independientes de cualquier framework o base de datos.

- **`src/domain/user.ts`**: Define la entidad `User` con sus propiedades y reglas.
- **`src/domain/session.ts`**: Define la entidad `Session`.

### 2. Capa de Aplicación (El "Cómo")

Contiene los casos de uso de la aplicación. Orquesta el flujo de datos desde y hacia el dominio, pero sigue siendo independiente de la capa de infraestructura.

- **`src/application/getBussinessPartners.ts`**: Un ejemplo de caso de uso que define la lógica para obtener socios de negocio.

### 3. Capa de Infraestructura (El "Con Qué")

Contiene todos los detalles técnicos y componentes externos. Aquí es donde residen los frameworks, las bases de datos y las interfaces con el mundo exterior.

- **`src/api.ts`**: Configuración del servidor Express.
- **`src/auth/routes.ts`**: Definición de las rutas de la API.
- **`src/auth/controllers.ts`**: Controladores que manejan las solicitudes HTTP y las respuestas.
- **`src/models/user.model.ts`**: Esquema de Mongoose para la entidad `User`.
- **`src/services/mongo.connector.ts`**: Implementación del conector a la base de datos MongoDB.

### Referencias

*   [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) by Robert C. Martin (Uncle Bob)
*   [explicit architecture: ddd, hexagonal, onion, clean](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/)
