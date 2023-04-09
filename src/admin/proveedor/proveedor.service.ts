import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from './proveedor.model';
import { ProveedorInput } from './Proveedor.interface';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private ProveedorRepository: Repository<Proveedor>,
  ) {}
  getProveedorById(Id: number) {
    return this.ProveedorRepository.query(
      `SELECT * FROM Proveedor WHERE Id_Proveedor = ${Id};`,
    );
    //
  }

  getProveedorByNandA(param: { Nombre: string; Apellido: string }) {
    return this.ProveedorRepository
      .query(`SELECT Id_Proveedor FROM Proveedor WHERE nombre = '${param.Nombre}' AND apellido = '${param.Apellido}';
    `);
  }

  insertProveedor(input: ProveedorInput) {
    return this.ProveedorRepository
      .query(`INSERT INTO Proveedor (nombre, apellido) VALUES ('${input.Nombre}', '${input.Apellido}');
   `);
  }

  updateProveedor(input: ProveedorInput) {
    return this.ProveedorRepository
      .query(`UPDATE Proveedor SET nombre = '${input.Nombre}', apellido = '${input.Apellido}',  WHERE id = ${input.Id};
    `);
  }

  deleteProveedorById(Id: number) {
    return this.ProveedorRepository.query(
      `DELETE FROM Proveedor WHERE id = ${Id};   `,
    );
  }

  getAllProveedor() {
    this.ProveedorRepository.query(`SELECT Nombre,Apellido FROM Proveedor`);
  }
}
