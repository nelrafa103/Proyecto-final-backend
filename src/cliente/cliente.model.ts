 
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Cliente')
export class Cliente {
   @PrimaryGeneratedColumn()
   Id: number;
 
   @Column()
   Nombre: string;
 
   @Column()
   Apellido:string
 
    
   @Column()
   NuTarjeta: string
   
   @Column()
   Telefono:string

}
