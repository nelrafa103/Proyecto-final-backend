import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarjeta } from '../Categorias/motherboard.model';

@Injectable()
export class MotheboardService {
   constructor(
      @InjectRepository(Tarjeta)
      private ClienteRepository: Repository<Tarjeta>,
    ) { }
  
   insertTarjeta(arg: {Nombre: string}) {
    return this.ClienteRepository.query(`INSERT INTO Tarjeta (nombre) VALUES ('${arg.Nombre}');`)
   }
   updateTarjetabyId(arg: {Id: number, Nombre: string}) {
      return this.ClienteRepository.query(`UPDATE Tarjeta SET nombre = '${arg.Nombre}' WHERE id = '${arg.Id}';`)
   }
   getAllMotherboard() {
      return this.ClienteRepository.query(`SELECT M.Nombre, Id_Generacion FROM Tarjeta T JOIN Modelo M
      ON T.modelo_id = M.id`)
   }

   getAllMotherboardById(id: number) {
     return this.ClienteRepository.query(`SELECT Id_Modelo, Id_Generacion FROM Tarjeta WHERE Id_Producto = '${id}'`)
   }
}
