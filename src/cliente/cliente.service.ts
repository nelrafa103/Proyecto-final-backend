import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './Cliente.model';
import { Repository } from 'typeorm';
import { normalize } from 'path';
import { ClienteInput } from './Cliente.interface';
/*Todo el codigo en funciion lo dejare ahi  */
@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private ClienteRepository: Repository<Cliente>,
  ) {}

  async getAllClientes(): Promise<Cliente[]> {
    return this.ClienteRepository.query(`   
    SELECT Nombre,Apellido,F.Fecha,F.Total,D.Id_Producto  FROM Cliente as C
    JOIN Factura as F on F.Id_Cliente = C.Id_Cliente
    Join Detalle as D on D.Id_Factura = F.Id_Factura  
    `);
  }

  findbyN(nombre: string) {
    // Codigo por funcion
    /* return this.ClienteRepository.findBy({
       Nombre: param.nombre,
      Apellido: param.apellido
     }); */

    return this.ClienteRepository.query(`SELECT 
    Nombre,Apellido,NuTarjeta FROM Cliente WHERE nombre LIKE '%${nombre}%';`);
  }

  findById(id: number) {
    //return this.ClienteRepository.findBy({Id_Cliente:id})
    return this.ClienteRepository.query(`SELECT
     Nombre,Apellido,NuTarjeta FROM Cliente WHERE id_Cliente = '${id}'`);
  }

  signUpCliente(nuevo: ClienteInput) {
    /* const nuevoCliente = this.ClienteRepository.create({
      Nombre: nuevo.Nombre,
      Apellido: nuevo.Apellido,
      NuTarjeta: nuevo.NuTarjeta,
      Telefono: nuevo.Telefono,
    });
    return this.ClienteRepository.save(nuevoCliente);*/
    return this.ClienteRepository
      .query(`INSERT INTO Cliente (nombre, apellido,telefono,NuTarjeta) 
    VALUES ('${nuevo.Nombre}', '${nuevo.Apellido}', '${nuevo.Telefono}', '${nuevo.NuTarjeta}');
    `);
  }

  async updateCliente(nuevo: ClienteInput) {
    /*return this.ClienteRepository.update({
      Id_Cliente: nuevo.Id
    }, {
      Nombre: nuevo.Nombre,
      Apellido: nuevo.Apellido
    }) */

    return this.ClienteRepository.query(`UPDATE Cliente
    SET Nombre = '${nuevo.Nombre}', Apellido = '${nuevo.Apellido}', Telefono = '${nuevo.Telefono}', NuTarjeta = '${nuevo.NuTarjeta}' 
    WHERE Id_Cliente = '${nuevo.Id}';
    `);
  }
  deleteClientById(id: number) {
    /*  return this.ClienteRepository.query('')
    return this.ClienteRepository.delete({
      Id_Cliente: id
    }) */
    return this.ClienteRepository.query(`DELETE FROM Cliente
    WHERE Id_Cliente = '${id}';
    `);
  }
}
