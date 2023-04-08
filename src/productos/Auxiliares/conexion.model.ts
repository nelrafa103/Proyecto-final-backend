import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Conexion {
   @PrimaryGeneratedColumn()
   Id_Conexion: number

   @Column()
   Nombre: string
}