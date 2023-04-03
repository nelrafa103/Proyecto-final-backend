import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Admin } from './admin.model';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminInput } from './admin.interface';

@Injectable()
export class AdminService {
   constructor(@InjectRepository(Admin)
   private AdminRepository: Repository<Admin>,) {
      
   }

   getAllAdmin() {
    this.AdminRepository.find({select: {Nombre: true, Apellido: true} })
   }
   getAdminByName(param: {Nombre}) {
     this.AdminRepository.findBy({Nombre: param.Nombre })
   }
   createNewAdmin(param: AdminInput) {
     const newAdmin = this.AdminRepository.create(
         {
            Nombre: param.Nombre,
            Apellido: param.Apellido,
            Contraseña: param.Contraseña
         }
      )
      return this.AdminRepository.save(newAdmin);
   }
   updateAdmin(param: AdminInput) {
     return this.AdminRepository.update({
      Id: param.Id
     },
     {
      Nombre: param.Nombre,
      Apellido: param.Apellido,
      Contraseña: param.Contraseña
     })
     
   }

   getAdminbyId(id: number) {
     return this.AdminRepository.findOneBy({Id:id})
   }
}
