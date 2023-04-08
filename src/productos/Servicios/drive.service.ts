import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DiscoDuro } from '../Categorias/drive.model';

@Injectable()
export class DriveService {
   constructor(
      @InjectRepository(DiscoDuro)
      private ClienteRepository: Repository<DiscoDuro>,
    ) { }
  
   insertDiscoDuro(arg: {Nombre: string}) {
     this.ClienteRepository.query(`INSERT INTO DiscoDuro (nombre) VALUES ('${arg.Nombre}');`)
   }
   updateDiscoDurobyId(arg: {Id: number, Nombre: string}) {
      this.ClienteRepository.query(`UPDATE DiscoDuro SET nombre = '${arg.Nombre}' WHERE Id = '${arg.Id}';`)
   }
}
