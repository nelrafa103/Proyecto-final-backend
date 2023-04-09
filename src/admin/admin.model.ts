import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Admin')
export class Admin {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Nombre: string;

  @Column()
  Contraseña: string;

  @Column()
  Apellido: string;

  @Column()
  Email: string;
}
