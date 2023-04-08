import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Generacion } from '../Auxiliares/generacion.model';

@Injectable()
export class GeneracionService {
   constructor(
      @InjectRepository(Generacion)
      private ClienteRepository: Repository<Generacion>,
    ) { }
  
   insertGeneracion(arg: {Nombre: string}) {
     this.ClienteRepository.query(`INSERT INTO Generacion (nombre) VALUES ('${arg.Nombre}');`)
   }
   updateGeneracionbyId(arg: {Id: number, Nombre: string}) {
      this.ClienteRepository.query(`UPDATE Generacion SET nombre = '${arg.Nombre}' WHERE Id_Generacion = '${arg.Id}';`)
   }
}
