
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { IncomeTransactionService } from './income-transaction.service';
import { CreateIncomeTransactionDto } from '@/income-transaction/dto/create-income-transaction.dto';
import { UpdateIncomeTransactionDto } from '@/income-transaction/dto/update-income-transaction.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';


const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    const name = file.originalname.split('.')[0];
    const extension = extname(file.originalname);
    const randomName = Array(32)
      .fill(null)
      .map(() => Math.round(Math.random() * 16).toString(16))
      .join('');
    cb(null, `${name}-${randomName}${extension}`);
  },
});



@Controller('income-transaction')
export class IncomeTransactionController {
  constructor(
    private readonly incomeTransactionService: IncomeTransactionService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(
    @Body() createIncomeTransactionDto: CreateIncomeTransactionDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.incomeTransactionService.create(
      createIncomeTransactionDto,
      file,
    );
  }

  @Get()
  findAll() {
    return this.incomeTransactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incomeTransactionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIncomeTransactionDto: UpdateIncomeTransactionDto,
  ) {
    return this.incomeTransactionService.update(
      +id,
      updateIncomeTransactionDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incomeTransactionService.remove(+id);
  }
}
