import { Injectable } from '@nestjs/common';
import { CreateFinancialRatioDto } from './dto/create-financial-ratio.dto';
import { UpdateFinancialRatioDto } from './dto/update-financial-ratio.dto';
import { PrismaService } from '@/common/prisma/prisma.service';

@Injectable()
export class FinancialRatioService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFinancialRatioDto: CreateFinancialRatioDto) {
    return this.prisma.financialRatio.create({ data: createFinancialRatioDto });
  }

  findAll() {
    return this.prisma.financialRatio.findMany();
  }

  findOne(id: number) {
    return this.prisma.financialRatio.findUnique({ where: { id } });
  }

  update(id: number, updateFinancialRatioDto: UpdateFinancialRatioDto) {
    return this.prisma.financialRatio.update({
      data: updateFinancialRatioDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.financialRatio.delete({ where: { id } });
  }
}
