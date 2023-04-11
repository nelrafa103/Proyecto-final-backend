import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tarjeta } from '../Categorias/motherboard.model';

@Injectable()
export class MotheboardService {
  constructor(
    @InjectRepository(Tarjeta)
    private ClienteRepository: Repository<Tarjeta>,
  ) {}

  insertTarjeta(arg: { Id_Modelo: number; Id_Generacion; Id_Producto }) {
    return this.ClienteRepository.query(
      `INSERT INTO Tarjeta (Id_Modelo,Id_Generacion,Id_Producto) VALUES ('${arg.Id_Modelo}', '${arg.Id_Generacion}', '${arg.Id_Producto}');`,
    );
  }
  updateTarjetabyId(arg: { Id: number; Nombre: string }) {
    return this.ClienteRepository.query(
      `UPDATE Tarjeta SET nombre = '${arg.Nombre}' WHERE id = '${arg.Id}';`,
    );
  }
  async getAllMotherboard() {
    return this.ClienteRepository
      .query(`SELECT M.Nombre as Modelo, M2.Nombre as Marca ,C2.Nombre as Conexion,G.Nombre as Generacion, T.Id_Producto, P.Precio , P.Cantidad  as Id  FROM Tarjeta as T
      Join Modelo as M on M.Id_Modelo = T.Id_Modelo 
      Join Producto as P ON P.Id_Producto = T.Id_Producto 
      Join Marca as M2 on P.Id_Marca = M2.Id_Marca
      Join Generacion as G on G.Id_Generacion = T.Id_Generacion
      Join Conexiones as C on C.Id_Producto  = T.Id_Producto 
      Join Conexion as C2 on C2.Id_Conexion = C.Id_Conexion `);
  }

  getAllMotherboardById(id: number) {
    return this.ClienteRepository.query(
      `SELECT Id_Modelo, Id_Generacion FROM Tarjeta WHERE Id_Producto = '${id}'`,
    );
  }
}
