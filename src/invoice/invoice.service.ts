import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.invoice.findMany();
  }

  findOne(id: number) {
    return this.prisma.invoice.findUnique({ where: { id } });
  }

  create(createInvoiceDto: CreateInvoiceDto) {
    return this.prisma.invoice.create({ data: createInvoiceDto });
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return this.prisma.invoice.update({
      data: updateInvoiceDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.invoice.delete({ where: { id } });
  }
}