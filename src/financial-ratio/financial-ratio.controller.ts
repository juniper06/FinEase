import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancialRatioService } from './financial-ratio.service';
import { CreateFinancialRatioDto } from './dto/create-financial-ratio.dto';
import { UpdateFinancialRatioDto } from './dto/update-financial-ratio.dto';

@Controller('financial-ratio')
export class FinancialRatioController {
  constructor(private readonly financialRatioService: FinancialRatioService) {}

  @Post()
  create(@Body() createFinancialRatioDto: CreateFinancialRatioDto) {
    return this.financialRatioService.create(createFinancialRatioDto);
  }

  @Get()
  findAll() {
    return this.financialRatioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financialRatioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinancialRatioDto: UpdateFinancialRatioDto) {
    return this.financialRatioService.update(+id, updateFinancialRatioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financialRatioService.remove(+id);
  }
}
