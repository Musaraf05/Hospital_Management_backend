import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto, UpdatePatientDto } from './dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post()
  create(@Body() data: CreatePatientDto) {
    return this.patientsService.create(data);
  }

  @Get()
  findAll() {
    return this.patientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdatePatientDto) {
    return this.patientsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientsService.remove(+id);
  }
}
