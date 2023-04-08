import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ram } from '../Categorias/ram.model';

@Injectable()
export class RamService {
   constructor(
      @InjectRepository(Ram)
      private ClienteRepository: Repository<Ram>,
    ) { }
  
   insertRam(arg: {Nombre: string}) {
     this.ClienteRepository.query(`INSERT INTO Ram (nombre) VALUES ('${arg.Nombre}');`)
   }
   updateRambyId(arg: {Id: number, Nombre: string}) {
      this.ClienteRepository.query(`UPDATE Ram SET nombre = '${arg.Nombre}' WHERE id = '${arg.Id}';`)
   }
}
