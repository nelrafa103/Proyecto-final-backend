import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Procesador } from '../Categorias/procesor.model';

@Injectable()
export class ChipService {
   constructor(
      @InjectRepository(Procesador)
      private ClienteRepository: Repository<Procesador>,
    ) { }
  
   insertProcesador(arg: {Nombre: string}) {
     this.ClienteRepository.query(`INSERT INTO Procesador (nombre) VALUES ('${arg.Nombre}');`)
   }
   updateProcesadorbyId(arg: {Id: number, Nombre: string}) {
      this.ClienteRepository.query(`UPDATE Procesador SET nombre = '${arg.Nombre}' WHERE Id = '${arg.Id}';`)
   }
}
