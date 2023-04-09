import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
Entity('Tipo');
export class Tipo {
  @PrimaryGeneratedColumn()
  Id_Tipo: number;
  @Column()
  Nombre: string;
}
