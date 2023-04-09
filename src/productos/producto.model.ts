import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Marca } from './Auxiliares/marca.model';
import { Tipo } from './Auxiliares/Tipo.model';

@Entity('producto')
export class Producto {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 100 })
  Precio: string;

  @Column({ length: 100 })
  Cantidad: string;

  @ManyToOne((type) => Marca)
  @JoinColumn({ name: 'Id_Marca' })
  Id_Marca: number;

  @ManyToOne((type) => Tipo)
  @JoinColumn({ name: 'Id_Tipo' })
  Id_Tipo: number;
}
