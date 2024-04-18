import { PrismaService } from '@/common/prisma/prisma.service';
import { CreateIncomeSourceDto } from '@/income-source/dto/create-income-source.dto';
import { UpdateIncomeSourceDto } from '@/income-source/dto/update-income-source.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IncomeSourceService {
  constructor(private readonly prisma: PrismaService) {}

  create(createIncomeSourceDto: CreateIncomeSourceDto) {
    return this.prisma.incomeSource.create({ data: createIncomeSourceDto });
  }

  findAll() {
    return this.prisma.incomeSource.findMany();
  }

  findOne(id: number) {
    return this.prisma.incomeSource.findUnique({ where: { id } });
  }

  update(id: number, updateIncomeSourceDto: UpdateIncomeSourceDto) {
    return this.prisma.incomeSource.update({
      data: updateIncomeSourceDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.incomeSource.delete({ where: { id } });
  }
}
