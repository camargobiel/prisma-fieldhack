# Para acessar o banco:
- pgcli postgres://superuser:root@localhost:5432/fieldhack

# Isso irá pegar as novas modificações do schema e aplicá-las:
- npx prisma db push

# Isso irá criar um novo arquivo de migração chamado init:
- npx prisma migrate dev --name init

# Isso irá seedar o banco de dados:
- ts-node prisma/seed.ts

# Isso irá resetar o banco de dados:
- npx prisma migrate reset
