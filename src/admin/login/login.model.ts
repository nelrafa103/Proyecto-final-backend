import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('login')
export class Login {
  @PrimaryGeneratedColumn()
  Id_Admin: number;

  @Column()
  Nombre: string;

  @Column()
  Contraseña: string;

  @Column()
  Apellido: string;

  @Column()
  Email: string;
}
