import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
Entity('Modelo');
export class Modelo {
  @PrimaryGeneratedColumn()
  Id_Modelo: number;

  @Column()
  Nombre: string;
}
