import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoInput } from './producto.interface';
import { MarcaService } from './Servicios/marca.service';
import { TipoService } from './Servicios/tipo.service';
import { MarcaInput } from './Interfaz/marca.interface';
import { ModeloInput } from './Interfaz/modelo.interface';
import { TipoInput } from './Interfaz/tipo.interface';
import { DriveService } from './Servicios/drive.service';
import { RamService } from './Servicios/ram.service';
import { ChipService } from './Servicios/chip.service';
import { MotheboardService } from './Servicios/motheboard.service';
import { ModeloService } from './Servicios/modelo.service';
import { GeneracionInput } from './Interfaz/generacion.interface';
import { GeneracionService } from './Servicios/generacion.service';
import { ConexionesInput } from './Interfaz/conexiones.interface';
import { ConexionService } from './Servicios/conexion.service';
import { ConexionesService } from './Servicios/conexiones.service';
import { ConexionInput } from './Interfaz/conexion.interface';
import { FacturaInput } from './Interfaz/factura.interface';
import { FacturaService } from './Servicios/factura.service';
import { DetalleService } from './Servicios/detalle.service';
import { ComboService } from './Servicios/combo.service';
import { ComboInput } from './Interfaz/combo.interface';
import { DetalleComboService } from './Servicios/detalle-combo.service';
import { AlmacenService } from './Servicios/almacen.service';
//import
@Controller('producto')
export class ProductoController {
  constructor(
    private readonly productoService: ProductoService,
    private readonly marcaService: MarcaService,
    private readonly tipoService: TipoService,
    private readonly driveService: DriveService,
    private readonly ramService: RamService,
    private readonly chipService: ChipService,
    private readonly motherboardService: MotheboardService,
    private readonly modeloService: ModeloService,
    private readonly generacionService: GeneracionService,
    private readonly conexionService: ConexionService,
    private readonly conexioneService: ConexionesService,
    private readonly facturaService: FacturaService,
    private readonly detalleService: DetalleService,
    private readonly comboService: ComboService,
    private readonly detalleComboService: DetalleComboService,
    private readonly adquisicionService: AlmacenService,

  ) {}

  @Post('new')
  async createNewProduct(@Body() entrada: ProductoInput) {
    /* const listaDeProductos = new Map<string, any>([
      ['DiscoDuro', this.driveService],
      ['Ram', this.ramService],
      ['Procesador', ChipService],
      ['Tarjeta', this.motherboardService],
    ]); */

    // Es necesario hacer un insert tambien en adquisiones
  
    const marca = await this.marcaService.GetById({ Id: entrada.Id_Marca });
    const tipo = await this.tipoService.GetById({ Id: entrada.Id_Tipo });
    console.log(tipo);
    if (marca.length == 0) {
      return new NotFoundException('No existe una marca con ese Id ');
    }
    if (tipo.length == 0) {
      console.log(marca);
      throw new NotFoundException('No existe un tipo con ese Id');
    } else {
      console.log(entrada)
      const nuevo = await this.productoService.insertProducto(entrada);
      if (!nuevo) {
        return new NotFoundException('No se podido crear un nuevo producto');
      }
      // console.log(nuevo)
      // console.log(tipo[0])
      // console.log(entrada.Id_Generacion,nuevo.insertId,entrada.Capacidad)
      const adquisicion = await this.adquisicionService.insertAdquisiciones({
        Id_Producto: nuevo.insertId,
        Id_Proveedor: entrada.Id_Proveedor,
        Cantidad: entrada.Cantidad,
        Fecha: entrada.Fecha,
        Compra: entrada.Compra
      })
      if(!adquisicion) {
        throw new NotFoundException('No se ha encontrado nada')
      }
      console.log(adquisicion)
      switch (tipo[0].Nombre) {
        case 'DiscoDuro':
          // Recordar añadir registros a la tabla conexiones
          this.driveService.insertDiscoDuro({
            Id_Modelo: entrada.Id_Modelo,
            Id_Producto: nuevo.insertId,
            Capacidad: entrada.Capacidad,
          });
          break;
        case 'Ram':
          this.ramService.insertRam({
            Id_Generacion: entrada.Id_Generacion,
            Id_Producto: nuevo.insertId,
            Capacidad: entrada.Capacidad,
          });
          break;
        case 'Procesador':
          this.chipService.insertProcesador({
            Id_Modelo: entrada.Id_Modelo,
            Id_Producto: nuevo.insertId,
            Velocidad: entrada.Velocidad,
          });
          break;
        case 'Tarjeta':
          // Recordar añadir registros a la tabla conexiones
          this.motherboardService.insertTarjeta({
            Id_Generacion: entrada.Id_Generacion,
            Id_Modelo: entrada.Id_Modelo,
            Id_Producto: nuevo.insertId,
          });
          break;
      }
      // Añadir un index a cada uno de los servicios.
    }
   
   
    return {}
  }

  @Post('new/marca')
  async createMarca(@Body() entrada: MarcaInput) {
    this.marcaService.insertMarca({ Nombre: entrada.Nombre });
  }

  @Post('new/modelo')
  async createModelo(@Body() entrada: ModeloInput) {
    this.modeloService.insertModelo({ Nombre: entrada.Nombre });
  }

  @Post('new/tipo')
  async createTipo(@Body() entrada: TipoInput) {
    this.tipoService.insertTipo({ Nombre: entrada.Nombre });
  }
  // Falta las actualizaciiones de todo esto
  //createNewEntryInCategory() {}

  @Post('new/generacion')
  async createGeneracion(@Body() entrada: GeneracionInput) {
    this.generacionService.insertGeneracion({ Nombre: entrada.Nombre });
  }
  @Post('new/conexion')
  async createConexion(@Body() entrada: ConexionInput) {
    this.conexionService.insertConexion({ Nombre: entrada.Nombre });
  }

  @Post('new/conexiones')
  async createConexiones(@Body() entrada: ConexionesInput) {
    this.conexioneService.insertConexiones({
      Id_Conexion: entrada.Id_Conexion,
      Id_Producto: entrada.Id_Producto,
    });
  }

  //Hay que revisar este codigo; Hay que hacer una resta en la nueva factura
  @Post('new/factura')
  async createFactura(@Body() entrada: FacturaInput) {
    const factura = await this.facturaService.insertFactura({
      Id_Cliente: entrada.Id_Cliente,
      Fecha: entrada.Fecha,
      Total: entrada.Total,
      Descuento: entrada.Descuento,
    });
    if (!factura) {
      throw new NotFoundException('No se ha podido crear la factura');
    } else {
      entrada.Lista.forEach((element) => {
        this.detalleService.insertDetalle({
          Id_Factura: factura.Id_Factura,
          Id_Producto: element.Id_Producto,
          Cantidad: element.Cantidad,
          Precio: element.Precio,
        });
      });
    }
    return {
      Elementos: factura,
      estaCompleto: true,
    };
  }
  @Post('new/combo')
  async createCombo(@Body() entrada: ComboInput) {
    const newCombo = await this.comboService.insertCombo({
      Nombre: entrada.Nombre,
      Precio: entrada.Precio,
    });
    if (!newCombo) {
      throw new NotFoundException('No se ha podido crear el combo');
    } else {
      entrada.Detalles.forEach((element) => {
        this.detalleComboService.insertDetalleCombo({
          Id_Producto: element.Id_Producto,
        });
      });
    }
    return {
      newCombo,
    };
  }

  @Get()
 async getAllproducts() {
    const productos = await this.productoService.getAllProducts();
    if(!productos) {
      throw new NotFoundException('No se podido realizar la consulta')
    }
    return {
      productos,
      columnas: [
        "Cantidad",
        "Precio",
        "Id",
        "Marca",
        "Tipo"
      ]
    }
  }
 @Get('tipo')
 async getAllTipos() {
   const tipos = await this.tipoService.GetAll()
   return {tipos}
 }

 @Get('ram')
 async getAllRam() {
   const productos = await this.ramService.getAllRam()
   return {productos,
    columnas: [
      "Cantidad",
      "Precio",
      "Id",
      "Marca",
      "Velocidad",
      "Generacion"
    ]}
 }
 @Get('tarjeta')
 async getAllTarjeta() {
   const productos = await this.motherboardService.getAllMotherboard()
   return {productos,
    columnas: [
      "Cantidad",
      "Precio",
      "Id",
      "Marca",
      "Conexiones",
      "Modelo"
    ]}
 }
 @Get('procesador')
 async getAllProcesador() {
   const productos = await this.chipService.getAllChips()
   return {productos,
    columnas: [
      "Cantidad",
      "Precio",
      "Id",
      "Marca",
      "Velocidad",
      "Modelo",
    ]}
 }
 @Get('discoduro')
 async getAllDiscoDuro() {
   const productos = await this.driveService.getAllDrive()
   return {productos,
    columnas: [
      "Cantidad",
      "Precio",
      "Id",
      "Marca",
      "Modelo",
      "Conexiones"
    ]}
 }
 @Get('combo')
 async getAllCombo() {
    const combos = await this.comboService.getAllCombos()
     return {
      combos,
      columnas: [
        "Nombre",
        "Precio",
        "Cantidad"
      ]
     }
 }
}
