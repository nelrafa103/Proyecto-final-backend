import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.model';
import { ProductoInput } from './producto.interface';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private ProductoRepository: Repository<Producto>,
  ) {}
  async insertProducto(arg: ProductoInput) {
    return this.ProductoRepository.query(
      `INSERT INTO Producto (Id_Marca,Id_Tipo,Precio,Cantidad) VALUES ('${arg.Id_Marca}', '${arg.Id_Tipo}', '${arg.Precio}', '${arg.Cantidad}' );`,
    );
  }
  updateProductoId(arg: { Id: number; Nombre: string }) {
    return this.ProductoRepository.query(
      `UPDATE Producto SET nombre = '${arg.Nombre}' WHERE Id_Producto = '${arg.Id}';`,
    );
  }

  getProductoById(Id: number) {
    return this.ProductoRepository.query(
      `Select Precio,Cantidad,Id_Producto FROM Producto WHERE Id_Producto = '${Id}'`,
    );
  }

  async getAllProducts() {
    return this.ProductoRepository.query(`   
    SELECT P.Precio, P.Cantidad,P.Id_Producto, T.Nombre as Tipo, M.Nombre as Marca
     FROM Producto as P
     INNER JOIN TipoProducto as T ON P.Id_Tipo = T.Id_Tipo
     Join Marca as M on M.Id_Marca = P.Id_Marca ;
    `)
  }
}
