 
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Cliente')
export class Cliente {
   @PrimaryGeneratedColumn()
   Id_Cliente: number;
 
   @Column({length: 100})
   Nombre: string;
 
   @Column({length: 100})
   Apellido:string
 
    
   @Column({length: 100})
   NuTarjeta: string

   @Column({length: 100})
   Telefono:string

}
