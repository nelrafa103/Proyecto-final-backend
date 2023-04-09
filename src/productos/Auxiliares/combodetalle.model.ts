import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Producto } from '../producto.model';
import { Combo } from './combo.model';
@Entity('Detalle_Combo')
export class ComboDetalle {
  @PrimaryGeneratedColumn()
  Id_DetalleCombo: number;

  @ManyToOne((type) => Combo)
  @JoinColumn({ name: 'Id_Combo' })
  Id_Combo: number;

  @ManyToOne((type) => Producto)
  @JoinColumn({ name: 'Id_Producto' })
  Id_Producto: number;
}
