import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminInput } from './admin.interface';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Get()
  async getAllAdmin() {
    return await this.adminService.getAllAdmin();
  }
  @Get(':id')
  getAdminById(@Param('id') id: number) {
    const deletedAdmin = this.adminService.getAdminbyId(id);
    if (!deletedAdmin) {
      throw new Error('No se ha podido borrar el registros por id');
    }
    return { deletedAdmin };
  }

  @Post('new')
  async createNewAdmin(@Body() entry: AdminInput) {
    const nuevoAdmin = await this.adminService.createNewAdmin(entry);
    if (!nuevoAdmin) {
      throw new Error('No se ha podido crear el administrador en cuestion');
    }
    return { entry };
  }

  @Put('update')
  updateAdmin(@Body() entry: AdminInput) {
    const modAdmin = this.adminService.updateAdmin(entry);
    if (!modAdmin) {
      throw new Error(`No se ha podido actualizadp el registro`);
    }
    return { modAdmin, entry };
  }

  // De momento innecesario
  @Post('name')
  getAdminByName() {}
}
