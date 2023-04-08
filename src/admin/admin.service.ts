import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Admin } from './admin.model';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminInput } from './admin.interface';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private AdminRepository: Repository<Admin>,
  ) {}

  getAllAdmin() {
   // this.AdminRepository.find({ select: { Nombre: true, Apellido: true } });
   return this.AdminRepository.query(`SELECT email FROM admin; `)
  }
  getAdminByName(param: { Nombre }) {
   // this.AdminRepository.findBy({ Nombre: param.Nombre });
   return this.AdminRepository.query(`SELECT email FROM admin WHERE nombre = '${param.Nombre}';   `)
  }
  createNewAdmin(param: AdminInput) {
    /* const newAdmin = this.AdminRepository.create(
         {
            Nombre: param.Nombre,
            Apellido: param.Apellido,
            Contraseña: param.Contraseña
         }
      )
      console.log(this.AdminRepository.create.toString())

      return this.AdminRepository.save(newAdmin); */
    return this.AdminRepository
      .query(`INSERT INTO admin (nombre, apellido, email,contraseña ) VALUES ('${param.Nombre}', '${param.Apellido}', '${param.Email}', '${param.Contraseña}');
      `);
  }
  updateAdmin(param: AdminInput) {
    /* return this.AdminRepository.update({
      Id: param.Id
     },
     {
      Nombre: param.Nombre,
      Apellido: param.Apellido,
      Contraseña: param.Contraseña
     })
     */
    return this.AdminRepository
      .query(`UPDATE admin SET nombre = '${param.Nombre}', apellido = '${param.Apellido}', password = '${param.Contraseña}', email = '${param.Email}' WHERE id_admin = ${param.Id};
    `);
  }

  getAdminbyId(id: number) {
    //return this.AdminRepository.findOneBy({Id:id})
    return this.AdminRepository.query(
      `SELECT email FROM admin WHERE id_admin = ${id};     `,
    );
  }
}
