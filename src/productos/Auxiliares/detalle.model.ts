import {
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  Entity,
} from 'typeorm';
import { Producto } from '../producto.model';
import { Factura } from '../Categorias/factura.model';
@Entity('Detalle')
export class Detalle {
  @PrimaryGeneratedColumn()
  Id_Detalle: number;

  @ManyToOne((type) => Producto)
  @JoinColumn({ name: 'Id_Producto' })
  Id_Producto: number;

  @ManyToOne((type) => Factura)
  @JoinColumn({ name: 'Id_Factura' })
  Id_Factura: number;

  @Column()
  Cantidad: number;

  @Column()
  Precio: number;
}
