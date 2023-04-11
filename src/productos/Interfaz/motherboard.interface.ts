export interface MotherboardInput {
  Id: number;
  Id_Modelo: number;
  Id_Generacion: number;
  Id_Producto: number;
  Conexiones: Conexion[]
}

type Conexion = {
  Id_Conexion: number
}
