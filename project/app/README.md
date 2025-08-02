# Clean Frontend

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![React Router Badge](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=fff&style=for-the-badge)![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge)![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=fff&style=for-the-badge)![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

Este es un template de frontend minimalista y moderno construido con React, TypeScript, Vite y Tailwind CSS. La estructura del proyecto está organizada por funcionalidades para promover la co-ubicación del código y facilitar la mantenibilidad.

## Filosofía

*   **Minimalista:** Solo lo esencial para empezar. Sin librerías o componentes innecesarios.
*   **Organizado por Funcionalidad:** El código relacionado vive junto, haciendo que sea más fácil de encontrar, entender y modificar.
*   **Moderno:** Utiliza herramientas modernas como Vite para una experiencia de desarrollo rápida.



## Cómo Empezar

Sigue estos pasos para levantar el entorno de desarrollo:

1.  **Instalar dependencias:**

    ```bash
    yarn install
    # o si usas npm
    # npm install
    ```

2.  **Ejecutar el servidor de desarrollo:**

    ```bash
    yarn dev
    # o si usas npm
    # npm run dev
    ```

    Esto iniciará la aplicación en modo de desarrollo. Abre [http://localhost:5173](http://localhost:5173) para verla en tu navegador.

## Estructura de Archivos

La estructura del directorio `src` está diseñada para ser intuitiva y escalable:

```
/src
├───assets/              # Recursos estáticos como imágenes y fuentes
├───components/          # Componentes de UI reutilizables
│   ├───ui/              # Componentes genéricos (Button, Input, etc.)
│   └───sidebar/         # Ejemplo de un componente más complejo
├───features/            # Funcionalidades de la aplicación (ej. autenticación)
│   └───auth/            # Módulo de autenticación
│       ├───components/  # Componentes de React para esta funcionalidad
│       ├───hooks/       # Hooks de React para la lógica de la UI
│       ├───services.ts  # Lógica de negocio y de API
│       └───types.ts     # Tipos y definiciones de datos
├───lib/                 # Código reutilizable y de bajo nivel (ej. cliente de API)
│   └───api.ts
├───store/               # Almacenamiento de estado global (ej. Zustand, Redux)
│   └───session.ts
├───pages/               # Componentes que representan páginas completas
├───main.css             # Estilos globales
└───main.tsx             # Punto de entrada de la aplicación
```

## Arquitectura Limpia (Clean Architecture)

Este proyecto sigue los principios de la Arquitectura Limpia para separar las responsabilidades y mejorar la mantenibilidad. La dependencia fluye de las capas externas a las internas.

`Infraestructura -> Aplicación -> Dominio`

## Resumen Visual

```
/src
├── components/          -> Infraestructura (UI)
│   └── sidebar/
│       ├── index.tsx
│       └── useSidebar.ts
├── features/
│   └── auth/
│       ├── components/  -> Infraestructura (UI)
│       │   └── LoginForm.tsx
│       ├── hooks/       -> Capa de Aplicación (Orquestación de UI)
│       │   └── useLogin.ts
│       ├── services/
│       │   └── api.ts   -> Infraestructura (Adaptador de API)
│       ├── services.ts  -> Capa de Aplicación (Casos de Uso, Interfaces)
│       └── types.ts     -> Capa de Dominio (Entidades)
└── store/
    └── session.ts       -> Infraestructura (Adaptador de State Management)
```


### 1. Capa de Dominio (El "Qué")

El corazón de la aplicación. Contiene la lógica y las reglas de negocio fundamentales, sin dependencias externas.

- **`src/features/auth/types.ts`**: Define las entidades de negocio como `User` y `Session`.

### 2. Capa de Aplicación (El "Cómo")

Orquesta los casos de uso de la aplicación, conectando el dominio con la infraestructura a través de interfaces.

- **`src/features/auth/services.ts`**: Contiene los casos de uso (`authenticate`) y las interfaces (`ApiService`) que definen los contratos para la capa de infraestructura.
- **`src/features/auth/hooks/useLogin.ts`**: Actúa como un presentador que conecta la UI con la lógica de la aplicación.

### 3. Capa de Infraestructura (El "Con Qué")

Contiene los detalles técnicos y las implementaciones concretas de las interfaces.

- **`src/features/auth/services/api.ts`**: Implementación concreta (`ApiAdapter`) de la interfaz `ApiService` usando `fetch`.
- **`src/features/auth/components/`** y **`src/components/`**: Componentes de React (UI).
- **`src/store/session.ts`**: Implementación del manejo de estado con Zustand.
- **`src/main.tsx`**: Configuración de enrutamiento con React Router.

### Referencias

*   [clean architecture on frontend](https://dev.to/bespoyasov/clean-architecture-on-frontend-4311)
*   [explicit architecture: ddd, hexagonal, onion, clean](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/)
