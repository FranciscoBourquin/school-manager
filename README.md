School Manager – API:

API REST para gestionar estudiantes de una escuela. Permite crear, leer, actualizar y eliminar estudiantes, y además filtrar por cursos. Pensada como proyecto educativo MERN para practicar diseño de APIs, conexión a MongoDB y organización por capas (controllers / services / models / routes).

✨ Características:

CRUD de estudiantes

Filtro por curso con ?course=… (ej.: ?course=Historia)

Validaciones del modelo (required, enum de cursos, timestamps)

Códigos HTTP claros: 200/201, 404 (no encontrado), 500 (error interno)

Arquitectura por capas: controllers, services, models y routes

🧱 Stack:

Node.js + Express

MongoDB + Mongoose

📁 Estructura del proyecto:

school-manager/
├── controllers/
│   └── students.controller.js
├── models/
│   └── students.model.js
├── routes/
│   └── students.routes.js
├── services/
│   └── students.service.js
├── app.js
├── package.json
├── vercel.json           
└── .env        

▶️ Scripts:

En package.json:
{
  "scripts": {
    "dev": "nodemon app.js",
    "start": "node app.js"
  }
}

🚀 Correr en local:
npm install
npm run dev
# http://localhost:8080

🛣️ Endpoints principales

Base URL local: http://localhost:8080/api

| Método | Endpoint               | Descripción                                  |
| -----: | ---------------------- | -------------------------------------------- |
|    GET | `/students`            | Lista todos los estudiantes                  |
|    GET | `/students?course=XYZ` | Lista estudiantes inscriptos en el curso XYZ |
|    GET | `/students/:id`        | Obtiene un estudiante por ID                 |
|   POST | `/students`            | Crea un estudiante                           |
|  PATCH | `/students/:id`        | Actualiza parcialmente un estudiante         |
| DELETE | `/students/:id`        | Elimina un estudiante                        |

Ejemplos:

Crear estudiante:

POST /api/students
Content-Type: application/json

{
  "nombre": "Juan",
  "apellido": "Perez",
  "email": "juan@correo.com",
  "cursos": ["Matemática", "Historia"]
}

Listar por curso:

GET /api/students?course=Historia

Actualizar (PUT):

PUT /api/students/64f1...c9a
Content-Type: application/json

{
  "cursos": ["Ciencias", "Arte"]
}

Eliminar estudiante:
DELETE /api/students/64f1...c9a

✅ Reglas y validaciones

cursos es array de strings con enum: ["Matemática","Historia","Ciencias","Arte"].

Timestamps automáticos: createdAt, updatedAt.

Nombre, apellido y cursos obligatorios (required)

🧩 Organización por capas (resumen)

Controller: orquesta HTTP (lee query/params/body, decide status code y mensajes).

Service: consulta a la base (find, findById, create, update, delete).

Model: schema Mongoose con validaciones.

Routes: define rutas y une middlewares + controller.

La APi ya está disponible en Vercel: https://school-manager-orcin.vercel.app/

🔮 Próximos pasos (ideas)

Middlewares de validación (ObjectId, body vacío, campos prohibidos).

Tests (Jest/Supertest).

Paginación y ordenamiento.

Autenticación/autorización.

Frontend React para consumir la API.

Créditos:
API desarrollada por Francisco Bourquin


