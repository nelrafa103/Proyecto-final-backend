 
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('login')
export class Login {
   @PrimaryGeneratedColumn()
   Id: number;
 
   @Column()
   Nombre: string;
 
   @Column()
   Contraseña:string;

   @Column()
   Apellido: string;
 

  
}
