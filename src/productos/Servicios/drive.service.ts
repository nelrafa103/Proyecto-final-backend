import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DiscoDuro } from '../Categorias/drive.model';

@Injectable()
export class DriveService {
  constructor(
    @InjectRepository(DiscoDuro)
    private ClienteRepository: Repository<DiscoDuro>,
  ) {}

  insertDiscoDuro(arg: {
    Id_Modelo: number;
    Capacidad: number;
    Id_Producto: number;
  }) {
    this.ClienteRepository.query(
      `INSERT INTO DiscoDuro (Id_Modelo, Capacidad, Id_Producto) VALUES ('${arg.Id_Modelo}', '${arg.Capacidad}', '${arg.Id_Producto}');`,
    );
  }
  updateDiscoDurobyId(arg: { Id: number; Nombre: string }) {
    this.ClienteRepository.query(
      `UPDATE DiscoDuro SET nombre = '${arg.Nombre}' WHERE Id = '${arg.Id}';`,
    );
  }
}
