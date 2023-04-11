import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Detalle } from '../Auxiliares/detalle.model';

@Injectable()
export class DetalleService {
  constructor(
    @InjectRepository(Detalle)
    private ClienteRepository: Repository<Detalle>,
  ) {}
 // A
  async insertDetalle(arg: {
    Id_Factura: number;
    Cantidad: number;
    Id_Producto: number;
    Precio: number;
  }) {
    return this.ClienteRepository.query(
      `INSERT INTO Detalle (Id_Factura, Cantidad, Id_Producto, Precio) VALUES ('${arg.Id_Factura}', '${arg.Cantidad}', '${arg.Id_Producto}', ${arg.Precio} );`,
    );
  }
  updateDetallebyId(arg: { Id: number; Nombre: string }) {
    this.ClienteRepository.query(
      `UPDATE Detalle SET nombre = '${arg.Nombre}' WHERE Id = '${arg.Id}';`,
    );
  }
}
