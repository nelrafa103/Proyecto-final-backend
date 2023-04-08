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
  ) { }

  getAllClientes() {
   return this.ClienteRepository.query('SELECT Nombre,Apellido FROM Cliente;')
  }

  findbyN(nombre: string) {

    // Codigo por funcion
    /* return this.ClienteRepository.findBy({
       Nombre: param.nombre,
      Apellido: param.apellido
     }); */

    return this.ClienteRepository.query(`SELECT 
    Nombre,Apellido,NuTarjeta FROM Cliente WHERE nombre LIKE '%${nombre}%';`)
  }

  findById(id: number) {
    //return this.ClienteRepository.findBy({Id_Cliente:id})
    return this.ClienteRepository.query(`SELECT
     Nombre,Apellido,NuTarjeta FROM Cliente WHERE id_Cliente = '${id}'`)
      ;
  }

  signUpCliente(nuevo: ClienteInput) {
  /* const nuevoCliente = this.ClienteRepository.create({
      Nombre: nuevo.Nombre,
      Apellido: nuevo.Apellido,
      NuTarjeta: nuevo.NuTarjeta,
      Telefono: nuevo.Telefono,
    });
    return this.ClienteRepository.save(nuevoCliente);*/
    return this.ClienteRepository.query(`INSERT INTO Cliente (nombre, apellido,telefono,NuTarjeta) 
    VALUES ('${nuevo.Nombre}', '${nuevo.Apellido}', '${nuevo.Telefono}', '${nuevo.NuTarjeta}');
    `)
  }

  updateCliente(nuevo: ClienteInput) {
    /*return this.ClienteRepository.update({
      Id_Cliente: nuevo.Id
    }, {
      Nombre: nuevo.Nombre,
      Apellido: nuevo.Apellido
    }) */

    return this.ClienteRepository.query(`UPDATE Cliente
    SET nombre = '${nuevo.Nombre}', apellido = '${nuevo.Apellido}', telefono = '${nuevo.Telefono}', NuTarjeta = '${nuevo.NuTarjeta}' 
    WHERE id_Cliente = '${nuevo.Id}';
    `)
  }
  deleteClientById(id: number) {
   /*  return this.ClienteRepository.query('')
    return this.ClienteRepository.delete({
      Id_Cliente: id
    }) */
    return this.ClienteRepository.query(`DELETE FROM Cliente
    WHERE id_Cliente = '${id}';
    `)
  }

}
