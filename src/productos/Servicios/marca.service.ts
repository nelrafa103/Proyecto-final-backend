import { Injectable } from '@nestjs/common';
import { Marca } from '../Auxiliares/marca.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MarcaService {
  constructor(
    @InjectRepository(Marca)
    private ClienteRepository: Repository<Marca>,
  ) {}

  insertMarca(arg: { Nombre: string }) {
    return this.ClienteRepository.query(
      `INSERT INTO Marca (Nombre) VALUES ('${arg.Nombre}');`,
    );
  }
  updateMarcabyId(arg: { Id: number; Nombre: string }) {
    return this.ClienteRepository.query(
      `UPDATE Marca SET Nombre = '${arg.Nombre}' WHERE Id_Marca = '${arg.Id}';`,
    );
  }
  async GetById(arg: { Id: number }): Promise<Marca[]> {
    return this.ClienteRepository.query(
      `Select Nombre FROM Marca WHERE Id_Marca = '${arg.Id}'`,
    );
  }
  //deleteMarcabyId()
}
