import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conexiones } from '../Auxiliares/conexiones.model';

@Injectable()
export class ConexionesService {
   constructor(
      @InjectRepository(Conexiones)
      private ClienteRepository: Repository<Conexiones>,
    ) { }
  
   insertConexiones(arg: {Nombre: string}) {
     this.ClienteRepository.query(`INSERT INTO Conexiones (nombre) VALUES ('${arg.Nombre}');`)
   }
   updateConexionesbyId(arg: {Id: number, Nombre: string}) {
      this.ClienteRepository.query(`UPDATE Conexiones SET nombre = '${arg.Nombre}' WHERE Id = '${arg.Id}';`)
   }
}
