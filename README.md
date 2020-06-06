# ORM-Test

## Prisma

Cosas importantes que hay que recordar. ([Documentación](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-sql-typescript-postgres))

---

1. La URI de conexión a postgres tiene el siguiente esquema: `postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA`

    * Para Heroku sería (Según la documentación) `DATABASE_URL="postgresql://opnmyfngbknppm:XXX@ec2-46-137-91-216.eu-west-1.compute.amazonaws.com:5432/d50rgmkqi2ipus?schema=hello-prisma"` 

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

3. El query que usé para crear la tabla es el siguiente (el schema public viene por defecto supongo jeje):

    ```sql
    CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL
    );
    ```

4. Se puede usar una interfaz que se llama Prisma Studio con `npx prisma studio --experimental` (Está cool, ayuda para hacer ciertos querys pero es experimental)

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

2. [Documentación](https://www.prisma.io/docs/understand-prisma/prisma-in-your-stack/rest) de Prisma para API's REST, y su ejemplo ([GitHub](https://github.com/prisma/prisma-examples/tree/master/typescript/rest-express)).

3. Algo que considero muy importante es el [filtering](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/filtering) y parece ser que este ORM lo maneja muy bien.

4. Buenas prácticas para crear una REST API ([Stackoverflow Blog](https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/))