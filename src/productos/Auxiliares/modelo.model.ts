import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Modelo {
   @PrimaryGeneratedColumn()
   Id_Modelo: number

   @Column()
   Nombre: string
   

}