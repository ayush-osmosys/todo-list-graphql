# Awesome Links

GraphQL API for managing and bookmarking links of users  
Create a postgres database  
add the link as postgresql://user@localhost:5432/database_name in .env file under variable DATABASE_URL as  
DATABASE_URL=postgresql://user@localhost:5432/database_name

start the postgres server and seed the database  
prisma will automatically create the tables and schema as defined in prisma/schema.prisma
to start run  

```bash
npm i
npx prisma db push
npx prisma seed

```

you can checkout the database with prisma studio as

```bash
npx prisma studio
```

to run the app simply run

```bash
npm run dev
```

By default it runs on <http://localhost:3000> for the app  
you can check the backend with <http://localhost:3000/api/graphql>
