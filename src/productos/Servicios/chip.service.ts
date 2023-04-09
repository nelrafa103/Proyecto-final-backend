import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Procesador } from '../Categorias/procesor.model';

@Injectable()
export class ChipService {
  constructor(
    @InjectRepository(Procesador)
    private ClienteRepository: Repository<Procesador>,
  ) {}

  insertProcesador(arg: {
    Id_Modelo: number;
    Velocidad: number;
    Id_Producto: number;
  }) {
    this.ClienteRepository.query(
      `INSERT INTO Procesador (Id_Modelo, Velocidad,Id_Producto) VALUES ('${arg.Id_Modelo}', '${arg.Velocidad}', '${arg.Id_Producto}');`,
    );
  }
  updateProcesadorbyId(arg: { Id: number; Nombre: string }) {
    this.ClienteRepository.query(
      `UPDATE Procesador SET nombre = '${arg.Nombre}' WHERE Id = '${arg.Id}';`,
    );
  }
}
