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

  async insertDiscoDuro(arg: {
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

  async getAllDrive() {
   return this.ClienteRepository.query(`SELECT M.Nombre,P.Precio,P.Id_Producto,P.cantidad,D.Capacidad,c2.Nombre  FROM DiscoDuro as D
    Join Modelo as M on M.Id_Modelo = D.Id_Modelo 
    Join Producto  as P on P.Id_Producto = D.Id_Producto
    Join Conexiones as C on C.Id_Producto = D.Id_Producto
    Join Conexion as c2 on c2.Id_Conexion = C.Id_Conexion  ;
   `)
  }
}
