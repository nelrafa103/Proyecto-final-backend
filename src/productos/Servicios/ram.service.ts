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
  async getAllRam() {
   return this.ClienteRepository.query(`
   SELECT M.Nombre, P.Precio, P.Id_Producto ,G.Id_Generacion FROM Ram as R
   Join Generacion as G on G.Id_Generacion = R.Id_Generacion 
   Join Producto as P on P.Id_Producto = R.Id_Producto 
   JOIN Marca as M on M.Id_Marca = P.Id_Marca
   ; 
    `)
  }
}
