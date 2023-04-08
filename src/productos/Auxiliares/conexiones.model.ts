import { Column, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "../producto.model";
import { Conexion } from "./conexion.model";

export class Conexiones {
   @PrimaryGeneratedColumn()
   Id: number

   @ManyToOne(type => Producto) @JoinColumn({name: 'Id_Producto'}) 
   Id_Producto: number


   @ManyToOne(type => Conexion) @JoinColumn({name: 'Id_Conexion'}) 
   Id_Conexion: number

}