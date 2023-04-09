import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Producto } from '../producto.model';
import { Cliente } from 'src/cliente/Cliente.model';

@Entity('Factura')
export class Factura {
  @PrimaryGeneratedColumn()
  Id_Factura: number;

  @ManyToOne((type) => Cliente)
  @JoinColumn({ name: 'Id_Cliente' })
  Id_Cliente: number;

  @Column()
  Total: number;

  @Column()
  Fecha: Date;

  @Column()
  Descuento: number;
}
