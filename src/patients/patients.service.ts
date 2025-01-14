import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { CreatePatientDto, UpdatePatientDto } from './dto';

@Injectable()
export class PatientsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePatientDto) {
    return this.prisma.patient.create({
      data: {
        ...data,
        floorNumber: typeof data.floorNumber === 'string' ? parseInt(data.floorNumber, 10) : data.floorNumber,
      },
    });
  }

  async findAll() {
    return this.prisma.patient.findMany();
  }

  async findOne(id: number) {
    return this.prisma.patient.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdatePatientDto) {
    return this.prisma.patient.update({
      where: { id },
      data: {
        ...data,
        floorNumber: typeof data.floorNumber === 'string' ? parseInt(data.floorNumber, 10) : data.floorNumber,
      },
    });
  }

  async remove(id: number) {
    return this.prisma.patient.delete({ where: { id } });
  }
}
