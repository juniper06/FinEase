import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.payment.findMany();
  }

  findOne(id: number) {
    return this.prisma.payment.findUnique({ where: { id } });
  }

  async create(createPaymentDto: CreatePaymentDto) {
    const { userId, customerId, dateOfPayment, paymentNumber, modeOfPayment, referenceNumber, totalAmount, payments } = createPaymentDto;

    return this.prisma.payment.create({
      data: {
        user: { connect: { id: userId } },
        customers: { connect: { id: customerId } },
        dateOfPayment,
        paymentNumber,
        modeOfPayment,
        referenceNumber,
        totalAmount,
        paymentItems: {
          create: payments.map(payment => ({
            amount: payment.amount,
            invoice: { connect: { id: payment.invoiceId } }
          }))
        }
      },
      include: {
        paymentItems: {
          include: {
            invoice: true
          }
        }
      }
    });
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return this.prisma.payment.update({
      data: updatePaymentDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.payment.delete({ where: { id } });
  }
}