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

  async getAllChips() {
    return this.ClienteRepository.query(`SELECT M.Nombre as Modelo, P.Precio , P.Id_Producto,P.cantidad,Pe.velocidad,P.Id_Marca  FROM Procesador as Pe
    Join Modelo as M ON M.Id_Modelo = Pe.Id_Modelo 
    Join Producto as P ON P.Id_Producto  = Pe.Id_Producto 
    Join Marca M2  on M2.Id_Marca = P.Id_Marca 
    `)
  }
}
