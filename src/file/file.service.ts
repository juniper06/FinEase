import { PrismaService } from '@/common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(id: number) {
    return this.prisma.file.findUnique({ where: { id } });
  }

}
