import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.model';
import { ProductoInput } from './producto.interface';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private ClienteRepository: Repository<Producto>,
  ) {}
  insertProducto(arg: ProductoInput) {
    return this.ClienteRepository.query(
      `INSERT INTO Producto (Id_Marca,Id_Tipo,Precio,Cantidad) VALUES ('${arg.Id_Marca}', '${arg.Id_Tipo}', '${arg.Precio}', '${arg.Cantidad}' );`,
    );
  }
  updateProductoId(arg: { Id: number; Nombre: string }) {
    return this.ClienteRepository.query(
      `UPDATE Producto SET nombre = '${arg.Nombre}' WHERE Id_Producto = '${arg.Id}';`,
    );
  }

  getProductoById(Id: number) {
    return this.ClienteRepository.query(
      `Select Precio,Cantidad,Id_Producto FROM Producto WHERE Id_Producto = '${Id}'`,
    );
  }
}
