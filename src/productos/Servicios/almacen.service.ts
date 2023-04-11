import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Adquisiciones } from '../Auxiliares/adquisiones.model';

@Injectable()
export class AlmacenService {
  constructor(
    @InjectRepository(Adquisiciones)
    private AdquisicionesRepository: Repository<Adquisiciones>,
  ) {}

  async insertAdquisiciones(arg: {
    Id_Proveedor: number;
    Cantidad: number;
    Id_Producto: number;
    Fecha: Date
    Compra: number
  }) {
    return this.AdquisicionesRepository.query(
      `INSERT INTO Adquisiones (Id_Proveedor,Id_Producto,Cantidad,Compra,Fecha) VALUES ('${arg.Id_Producto}', '${arg.Id_Producto}', '${arg.Cantidad}', '${arg.Compra}', '${arg.Fecha}');`,
    );
  }
  getAdquisicionesbyId(arg: { Id: number; }) {
    this.AdquisicionesRepository.query(
      `
      Select P.Precio, P.Cantidad, A.Compra, TP.Nombre  as Categoria,M.Nombre as Marca, A.Cantidad ,A.Fecha  FROM Adquisiones as A
      Join Producto as P on P.Id_Producto = A.Id_Producto and A.Id_Adquision = ${arg.Id}
      Join TipoProducto as TP on TP.Id_Tipo = P.Id_Tipo 
      Join Marca as M on M.Id_Marca = P.Id_Marca;`,
    );
  }

  async getAqui() {
    return this.AdquisicionesRepository.query(` `)
  }
}