import { Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

export class Generacion {
  @PrimaryGeneratedColumn()
  Id_Generacion: number;

  @Column()
  Nombre: string;
}
