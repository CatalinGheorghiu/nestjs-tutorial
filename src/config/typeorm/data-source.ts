import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Password123456",
  database: "postgres",
  entities: ["src/**/*.entity.ts"],
  migrations: ["src/migrations/*.ts"],
  synchronize: true,
});
