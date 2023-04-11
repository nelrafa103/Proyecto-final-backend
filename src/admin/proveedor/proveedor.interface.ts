export class ProveedorInput {
  Id: number;
  Nombre: string;
  Apellido: string;
  Productos: producto[]
}

type producto = {
  Tipo: string,
  Id_Producto: number,
  Cantidad: number,
  Compra: number
}