import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Proveedor')
export class Proveedor {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Nombre: string;

  @Column()
  Apellido: string;
}
