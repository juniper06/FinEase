import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncomeSourceService } from './income-source.service';
import { CreateIncomeSourceDto } from '@/income-source/dto/create-income-source.dto';
import { UpdateIncomeSourceDto } from '@/income-source/dto/update-income-source.dto';

@Controller('income-source')
export class IncomeSourceController {
  constructor(private readonly incomeSourceService: IncomeSourceService) {}

  @Post()
  create(@Body() createIncomeSourceDto: CreateIncomeSourceDto) {
    return this.incomeSourceService.create(createIncomeSourceDto);
  }

  @Get()
  findAll() {
    return this.incomeSourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incomeSourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIncomeSourceDto: UpdateIncomeSourceDto) {
    return this.incomeSourceService.update(+id, updateIncomeSourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incomeSourceService.remove(+id);
  }
}
