import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Combo } from '../Auxiliares/combo.model';

@Injectable()
export class ComboService {
  constructor(
    @InjectRepository(Combo)
    private ClienteRepository: Repository<Combo>,
  ) {}
 /* 
 function validarNombre(nombre: string): boolean {
  const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ]+([ ][A-Za-záéíóúÁÉÍÓÚñÑ]+)*$/;
  return regex.test(nombre);
}

function validarApellido(apellido: string): boolean {
  const regex = /^[A-Za-záéíóúÁÉÍÓÚñÑ]+$/;
  return regex.test(apellido);
}

 */
  async insertCombo(arg: { Nombre: string; Precio: number, Cantidad: number }) {
    return this.ClienteRepository.query(
      `INSERT INTO Combo (Nombre, Precio) VALUES ('${arg.Nombre}', '${arg.Precio}'  );`,
    );
  }
  updateCombobyId(arg: { Id: number; Nombre: string }) {
    this.ClienteRepository.query(
      `UPDATE Combo SET nombre = '${arg.Nombre}' WHERE Id = '${arg.Id}';`,
    );
  }
  async getAllCombos() {
    return this.ClienteRepository.query(`       
        SELECT CO.Precio, COUNT(*) AS Cantidad, CO.Nombre AS NombreCombo
        FROM Factura F
        JOIN Detalle D ON F.Id_Factura = D.Id_Factura
        JOIN Detalle_Combo DC ON D.Id_Producto = DC.Id_Producto
        JOIN Combo as CO ON DC.Id_Combo = CO.Id_Combo
        JOIN Producto P ON D.Id_Producto = P.Id_Producto
        WHERE F.Fecha = (SELECT Fecha FROM Factura WHERE Id_Factura = F.Id_Factura)
        GROUP BY CO.Nombre, CO.Precio
        HAVING COUNT(DISTINCT P.Id_Producto) = (SELECT COUNT(*) FROM Combo WHERE Id_Combo)
    `);
  }
}
