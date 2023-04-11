import { Module } from '@nestjs/common';
import { ChipModule } from './Modulos/chip.module';
import { MotherboardModule } from './Modulos/motherboard.module';
import { DriveModule } from './Modulos/drive.module';
import { RamModule } from './Modulos/ram.module';
import { Producto } from './producto.model';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TipoService } from './Servicios/tipo.service';
import { Tipo } from './Auxiliares/Tipo.model';
import { Marca } from './Auxiliares/marca.model';
import { MarcaService } from './Servicios/marca.service';
import { ModeloService } from './Servicios/modelo.service';
import { Modelo } from './Auxiliares/modelo.model';
import { Generacion } from './Auxiliares/generacion.model';
import { GeneracionService } from './Servicios/generacion.service';
import { ConexionesService } from './Servicios/conexiones.service';
import { Conexiones } from './Auxiliares/conexiones.model';
import { ConexionService } from './Servicios/conexion.service';
import { Conexion } from './Auxiliares/conexion.model';
import { Factura } from './Categorias/factura.model';
import { Combo } from './Auxiliares/combo.model';
import { Detalle } from './Auxiliares/detalle.model';
import { ComboDetalle } from './Auxiliares/combodetalle.model';
import { FacturaService } from './Servicios/factura.service';
import { ComboService } from './Servicios/combo.service';
import { DetalleComboService } from './Servicios/detalle-combo.service';
import { DetalleService } from './Servicios/detalle.service';
import { Adquisiciones } from './Auxiliares/adquisiones.model';
import { AlmacenService } from './Servicios/almacen.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Producto,
      Marca,
      Tipo,
      Modelo,
      Generacion,
      Conexiones,
      Conexion,
      Factura,
      Combo,
      ComboDetalle,
      Detalle,
      Adquisiciones
    ]),
    ChipModule,
    MotherboardModule,
    DriveModule,
    RamModule,
  ],
  controllers: [ProductoController],
  exports: [ProductoService],
  providers: [
    ProductoService,
    TipoService,
    MarcaService,
    ModeloService,
    GeneracionService,
    ConexionesService,
    ConexionService,
    FacturaService,
    AlmacenService,
    ComboService,
    DetalleComboService,
    DetalleService,
  ],
})
export class ProductosModule {}
