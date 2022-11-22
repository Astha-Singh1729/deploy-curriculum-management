import { DataSource } from 'typeorm';
import {
  CIF,
  Person,
  Student,
  Faculty,
  Administrator,
  Requests,
} from './stuff/entities/Data';
export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },

  username: 'pepega',
  database: 'isdl',
  password: 'peepustrong',
  entities: [CIF, Person, Student, Faculty, Administrator, Requests],
  synchronize: true,
  logging: true,
});
