import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Conexion } from '../Auxiliares/conexion.model';

@Injectable()
export class ConexionService {
  constructor(
    @InjectRepository(Conexion)
    private ClienteRepository: Repository<Conexion>,
  ) {}

  insertConexion(arg: { Nombre: string }) {
    this.ClienteRepository.query(
      `INSERT INTO Conexion (nombre) VALUES ('${arg.Nombre}');`,
    );
  }
  updateConexionbyId(arg: { Id: number; Nombre: string }) {
    this.ClienteRepository.query(
      `UPDATE Conexion SET nombre = '${arg.Nombre}' WHERE Id_Conexion = '${arg.Id}';`,
    );
  }
}
