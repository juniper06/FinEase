import { PrismaService } from '@/common/prisma/prisma.service';
import { CreateIncomeTransactionDto } from '@/income-transaction/dto/create-income-transaction.dto';
import { UpdateIncomeTransactionDto } from '@/income-transaction/dto/update-income-transaction.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IncomeTransactionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createIncomeTransactionDto: CreateIncomeTransactionDto,
    file: Express.Multer.File,
  ) {
    const savedFile = await this.prisma.file.create({
      data: {
        fileName: file.filename,
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
      },
    });
    return this.prisma.incomeTransaction.create({
      data: {
        ...createIncomeTransactionDto,
        receiptId: savedFile.id,
      },
    });
  }

  findAll() {
    return this.prisma.incomeTransaction.findMany();
  }

  findOne(id: number) {
    return this.prisma.incomeTransaction.findUnique({ where: { id } });
  }

  async update(
    id: number,
    updateIncomeTransactionDto: UpdateIncomeTransactionDto,
    file?: Express.Multer.File,
  ) {
    let updatedFile = await this.prisma.file.findFirst({
      where: { incomeTransaction: { id } },
    });
    if (file) {
      updatedFile = await this.prisma.file.create({
        data: {
          fileName: file.filename,
          originalName: file.originalname,
          mimeType: file.mimetype,
          size: file.size,
        },
      });
    }
    return this.prisma.incomeTransaction.update({
      data: {
        ...updateIncomeTransactionDto,
        receiptId: updatedFile.id,
      },
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.prisma.incomeTransaction.delete({ where: { id } });
  }
}
