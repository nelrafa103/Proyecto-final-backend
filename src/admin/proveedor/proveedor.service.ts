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
  async getProveedorById(Id: number) {
    return this.ProveedorRepository.query(
      `SELECT * FROM Proveedor WHERE Id_Proveedor = ${Id};`,
    );
    //
  }

  async getProveedorByNandA(param: { Nombre: string; Apellido: string }) {
    return this.ProveedorRepository
      .query(`SELECT Id_Proveedor FROM Proveedor WHERE Nombre = '${param.Nombre}' AND apellido = '${param.Apellido}';
    `);
  }

  async insertProveedor(input: ProveedorInput) {
    return this.ProveedorRepository
      .query(`INSERT INTO Proveedor (Nombre, apellido) VALUES ('${input.Nombre}', '${input.Apellido}');
   `);
  }

  async updateProveedor(input: ProveedorInput) {
    return this.ProveedorRepository
      .query(`UPDATE Proveedor SET Nombre = '${input.Nombre}', apellido = '${input.Apellido}',  WHERE id = ${input.Id};
    `);
  }

  async deleteProveedorById(Id: number) {
    return this.ProveedorRepository.query(
      `DELETE FROM Proveedor WHERE id = ${Id};   `,
    );
  }

 async getAllProveedor(): Promise<Proveedor[]> {
   return this.ProveedorRepository.query(`    
   SELECT Nombre,Apellido,Pr.Precio,A.Cantidad,A.Compra,A.Id_Producto FROM Proveedor as P
   Join Adquisiones as A on A.Id_Proveedor = P.Id_Proveedor
   Join Producto as Pr on Pr.Id_Producto = A.Id_Producto`);
  }
}
