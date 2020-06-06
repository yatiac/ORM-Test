# ORM-Test

## Prisma

Cosas importantes que hay que recordar.

---

1. La URI de conexión a postgres tiene el siguiente esquema: `postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA`

2. Los comandos que se utilizan para que Prisma haga el trabajo son:
    * `npx prisma introspect` cuando ya se creo todo el modelo de datos, este comando genera un modelo dentro de schema.prisma. Genera una cosa así (Ejemplo):

        ```typescript
        model User {
        id      Int      @default(autoincrement()) @id
        email   String   @unique
        name    String?
        Post    Post[]
        Profile Profile?
        }
        ```
    
    * `npx prisma generate` (antes --> `npm install @prisma/client`) para obtener la librería y la configuración del cliente de Prisma para hacer querys a la db.