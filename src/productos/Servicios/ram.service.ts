import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ram } from '../Categorias/ram.model';

@Injectable()
export class RamService {
  constructor(
    @InjectRepository(Ram)
    private ClienteRepository: Repository<Ram>,
  ) {}

  insertRam(arg: {
    Id_Generacion: number;
    Capacidad: number;
    Id_Producto: number;
  }) {
    this.ClienteRepository.query(
      `INSERT INTO Ram (Id_Generacion, Capacidad, Id_Producto) VALUES ('${arg.Id_Generacion}', '${arg.Capacidad}', ${arg.Id_Producto});`,
    );
  }

  // Cambiar (Desactualizado)
  updateRambyId(arg: { Id: number; Nombre: string }) {
    this.ClienteRepository.query(
      `UPDATE Ram SET nombre = '${arg.Nombre}' WHERE id = '${arg.Id}';`,
    );
  }
}
