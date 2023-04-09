import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conexiones } from '../Auxiliares/conexiones.model';

@Injectable()
export class ConexionesService {
  constructor(
    @InjectRepository(Conexiones)
    private ClienteRepository: Repository<Conexiones>,
  ) {}

  insertConexiones(arg: { Id_Producto: number; Id_Conexion: number }) {
    this.ClienteRepository.query(
      `INSERT INTO Conexiones (Id_Producto) VALUES ('${arg.Id_Producto}', '${arg.Id_Conexion}');`,
    );
  }
  updateConexionesbyId(arg: { Id: number; Nombre: string }) {
    this.ClienteRepository.query(
      `UPDATE Conexiones SET nombre = '${arg.Nombre}' WHERE Id = '${arg.Id}';`,
    );
  }
}
