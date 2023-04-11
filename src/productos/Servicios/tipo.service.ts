import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tipo } from '../Auxiliares/Tipo.model';

@Injectable()
export class TipoService {
  constructor(
    @InjectRepository(Tipo)
    private TipoRepository: Repository<Tipo>,
  ) {}

  insertTipo(arg: { Nombre: string }) {
    this.TipoRepository.query(
      `INSERT INTO TipoProducto (Nombre) VALUES ('${arg.Nombre}');`,
    );
  }
  updateTipobyId(arg: { Id: number; Nombre: string }) {
    this.TipoRepository.query(
      `UPDATE TipoProducto SET Nombre = '${arg.Nombre}' WHERE Id_Tipo = '${arg.Id}';`,
    );
  }
  async GetById(arg: { Id: number }): Promise<Tipo[]> {
    return this.TipoRepository.query(
      `Select Nombre FROM TipoProducto WHERE Id_Tipo= '${arg.Id}'`,
    );

  
  }
  async GetAll() {
    return this.TipoRepository.query(`Select Nombre FROM TipoProducto`)
   }
}
