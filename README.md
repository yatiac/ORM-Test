# ORM-Test

## Prisma

Cosas importantes que hay que recordar. ([Documentación](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-sql-typescript-postgres))

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

---

### Dudas

1. En el ejemplo de la documentación, cuando hacen un query que devuelve todos los usuarios, ellos cierran la conexión luego de ejecutar la función que hace eso.

    ```typescript
    main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.disconnect()
    })
    ```

    La verdad no sé si esto sea por una buena práctica o qué, tampoco sé si el garbage collector de JS se encarga de eso jeje.

---

### Para ayuda

1. Con este [repo](https://github.com/FaztWeb/typescript-mysql-rest) aprendí cosas nuevas del router de express.