import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.model';
import { Repository } from 'typeorm';
import { normalize } from 'path';
import { ClienteInput } from './cliente.interface';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private ClienteRepository: Repository<Cliente>,
  ) {}

  getAllClientes() {
    return this.ClienteRepository.find({select: {Nombre: true}});
  }

  findbyNandA(param: { nombre: string; apellido: string }) {
    return this.ClienteRepository.findBy({
      Nombre: param.nombre,
      Apellido: param.apellido,
    });
  }

  findById(id: number) {
    return this.ClienteRepository.findBy({})
   ;
  }

  signUpCliente(nuevo: ClienteInput) {
   const nuevoCliente = this.ClienteRepository.create({
      Nombre: nuevo.Nombre,
      Apellido: nuevo.Apellido,
      NuTarjeta: nuevo.NuTarjeta,
      Telefono: nuevo.Telefono,
    });
    return this.ClienteRepository.save(nuevoCliente);
  }
}
