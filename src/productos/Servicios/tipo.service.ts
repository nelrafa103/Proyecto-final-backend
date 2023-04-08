import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipo } from '../Auxiliares/Tipo.model';

@Injectable()
export class TipoService {
   constructor(
      @InjectRepository(Tipo)
      private ClienteRepository: Repository<Tipo>,
    ) { }
  
   insertTipo(arg: {Nombre: string}) {
     this.ClienteRepository.query(`INSERT INTO TipoProducto (nombre) VALUES ('${arg.Nombre}');`)
   }
   updateTipobyId(arg: {Id: number, Nombre: string}) {
      this.ClienteRepository.query(`UPDATE TipoProducto SET nombre = '${arg.Nombre}' WHERE Id_Tipo = '${arg.Id}';`)
   }
  async GetById(arg: {Id: number}): Promise<Tipo[]> {
      return this.ClienteRepository.query(`Select Nombre FROM TipoProducto WHERE Id_Tipo= '${arg.Id}'`)
   }
}
