import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComboDetalle } from '../Auxiliares/combodetalle.model';

@Injectable()
export class DetalleComboService {
  constructor(
    @InjectRepository(ComboDetalle)
    private ClienteRepository: Repository<ComboDetalle>,
  ) {}

  insertDetalleCombo(arg: { Id_Producto: number }) {
    return this.ClienteRepository.query(
      `INSERT INTO Detalle_Combo (Id_Producto) VALUES ('${arg.Id_Producto}');`,
    );
  }
}
