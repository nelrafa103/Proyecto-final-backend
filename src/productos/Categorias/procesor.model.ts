import { Column, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Producto } from "../producto.model";
import { Modelo } from "../Auxiliares/modelo.model";

export class Procesador {
   @PrimaryGeneratedColumn()
   Id: number;
 
   @ManyToOne(type => Modelo) @JoinColumn({name: 'Id_Modelo'}) 
   Id_Modelo: number;
 
   @Column()
   Velocidad:number
    
   @OneToOne(type => Producto) @JoinColumn({name: 'Id_Producto'}) 
   Id_Producto: number

}