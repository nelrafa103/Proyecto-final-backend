import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Generacion')
export class Generacion {
  @PrimaryGeneratedColumn()
  Id_Generacion: number;

  @Column()
  Nombre: string;
}
