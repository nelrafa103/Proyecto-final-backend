import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
Entity('Marca');
export class Marca {
  @PrimaryGeneratedColumn()
  Id_Marca: number;

  @Column()
  Nombre: string;
}
