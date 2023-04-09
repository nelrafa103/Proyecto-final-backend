import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Producto } from '../producto.model';
import { Conexion } from './conexion.model';

Entity('Combo');
export class Combo {
  @PrimaryGeneratedColumn()
  Id_Combo: number;

  @Column()
  Nombre: string;

  @Column()
  Precio: number;
}
