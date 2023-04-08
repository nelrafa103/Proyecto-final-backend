import { Column, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "../producto.model";
import { Generacion } from "../Auxiliares/generacion.model";
import { Modelo } from "../Auxiliares/modelo.model";

export class Tarjeta {
   @PrimaryGeneratedColumn()
   Id: number;
 
   @ManyToOne(type => Modelo) @JoinColumn({name: 'Id_Modelo'}) 
   Id_Modelo: number;
 
   @ManyToOne(type => Generacion) @JoinColumn({name: 'Id_Generacion'}) 
   Id_Generacion:number
    
   @OneToOne(type => Producto) @JoinColumn({name: 'Id_Producto'}) 
   Id_Producto: number

}