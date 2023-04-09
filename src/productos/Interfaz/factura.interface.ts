export interface FacturaInput {
  Id_Cliente: number;
  Total: number;
  Fecha: Date;
  Descuento: number;
  Lista: entrada[];
}

type entrada = {
  Precio: number;
  Id_Producto: number;
  Cantidad: number;
};
