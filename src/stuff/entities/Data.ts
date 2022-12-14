import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username: string;
  @Column()
  name: string;
  @Column()
  password: string;
}

@Entity()
export class Student extends Person {
  @Column()
  branch: string;
}

@Entity()
export class CIF {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  course: string;
  @Column()
  department: string;
  @Column()
  content: string;
}

@Entity()
export class Faculty extends Person {
  @Column('int', { array: true })
  cifs: number[];
}

@Entity()
export class Requests {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cifid: number;

  @Column()
  course: string;

  @Column()
  department: string;

  @Column()
  faculty: string;

  @Column()
  temp_cif: string;

  @Column()
  isrequested: boolean;
}

@Entity()
export class Administrator extends Person {}
