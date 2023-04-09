import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Producto } from '../producto.model';
import { Generacion } from '../Auxiliares/generacion.model';
Entity('Ram');
export class Ram {
  @PrimaryGeneratedColumn()
  Id: number;

  @ManyToOne((type) => Generacion)
  @JoinColumn({ name: 'Id_Generacion' })
  Id_Generacion: number;

  @Column()
  Capacidad: number;

  @OneToOne((type) => Producto)
  @JoinColumn({ name: 'Id_Producto' })
  Id_Producto: number;
}
