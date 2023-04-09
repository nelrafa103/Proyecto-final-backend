import { Injectable } from '@nestjs/common';
import { Modelo } from '../Auxiliares/modelo.model';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ModeloService {
  constructor(
    @InjectRepository(Modelo)
    private ClienteRepository: Repository<Modelo>,
  ) {}

  insertModelo(arg: { Nombre: string }) {
    return this.ClienteRepository.query(
      `INSERT INTO Modelo (nombre) VALUES ('${arg.Nombre}');`,
    );
  }
  updateModelobyId(arg: { Id: number; Nombre: string }) {
    return this.ClienteRepository.query(
      `UPDATE Modelo SET nombre = '${arg.Nombre}' WHERE Id_Modelo = '${arg.Id}';`,
    );
  }

  getModeloById(Id: number) {
    return this.ClienteRepository.query(
      `Select Nombre FROM Modelo WHERE Id_Modelo = '${Id}'`,
    );
  }
}
