import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Factura } from '../Categorias/factura.model';

@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(Factura)
    private ClienteRepository: Repository<Factura>,
  ) {}

  async insertFactura(arg: {
    Id_Cliente: number;
    Total: number;
    Fecha: Date;
    Descuento: number;
  }) {
    return this.ClienteRepository.query(
      `INSERT INTO Factura (Id_Cliente, Total, Fecha, Descuento) VALUES ('${arg.Id_Cliente}', '${arg.Total}', '${arg.Fecha}', ${arg.Descuento} );`,
    );
  }
  updateFacturabyId(arg: { Id: number; Nombre: string }) {
    this.ClienteRepository.query(
      `UPDATE Factura SET nombre = '${arg.Nombre}' WHERE Id = '${arg.Id}';`,
    );
  }
}
