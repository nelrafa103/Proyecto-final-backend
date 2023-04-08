import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Tipo {
  @PrimaryGeneratedColumn()
  Id_Tipo: number;
  @Column()
  Nombre: string;
}
