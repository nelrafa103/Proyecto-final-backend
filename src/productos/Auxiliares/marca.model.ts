import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Marca {
   @PrimaryGeneratedColumn()
   Id_Marca: number

   @Column()
   Nombre: string
}