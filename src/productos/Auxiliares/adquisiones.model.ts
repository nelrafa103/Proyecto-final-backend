/* */

import {
   PrimaryGeneratedColumn,
   ManyToOne,
   JoinColumn,
   Column,
   Entity,
 } from 'typeorm';
 import { Producto } from '../producto.model';
 import { Factura } from '../Categorias/factura.model';
 @Entity('Adquisiones')
 export class Adquisiciones {
   @PrimaryGeneratedColumn()
   Id_Adquision: number;
 
   @ManyToOne((type) => Producto)
   @JoinColumn({ name: 'Id_Producto' })
   Id_Producto: number;
 
   @ManyToOne((type) => Factura)
   @JoinColumn({ name: 'Id_Proveedor' })
   Id_Proveedor: number;
 
   @Column()
   Cantidad: number;
 
   @Column()
   Compra: number;

   @Column()
   Fecha: Date;
 }
 