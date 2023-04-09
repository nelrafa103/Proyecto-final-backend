import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
Entity('Conexion');
export class Conexion {
  @PrimaryGeneratedColumn()
  Id_Conexion: number;

  @Column()
  Nombre: string;
}
