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

  async insertCombo(arg: { Nombre: string; Precio: number }) {
    return this.ClienteRepository.query(
      `INSERT INTO Combo (Nombre, Precio) VALUES ('${arg.Nombre}, '${arg.Precio}' );`,
    );
  }
  updateCombobyId(arg: { Id: number; Nombre: string }) {
    this.ClienteRepository.query(
      `UPDATE Combo SET nombre = '${arg.Nombre}' WHERE Id = '${arg.Id}';`,
    );
  }
}
