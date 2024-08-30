import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { InvoiceService } from './invoice.service';
  import { CreateInvoiceDto } from './dto/create-invoice.dto';
  import { UpdateInvoiceDto } from './dto/update-invoice.dto';
  
  @Controller('invoice')
  export class InvoiceController {
    constructor(private readonly invoiceService: InvoiceService) {}
  
    @Get()
    findAll() {
      return this.invoiceService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.invoiceService.findOne(+id);
    }
  
    @Post()
    create(@Body() createInvoiceDto: CreateInvoiceDto) {
      return this.invoiceService.create(createInvoiceDto);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
      return this.invoiceService.update(+id, updateInvoiceDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.invoiceService.remove(+id);
    }

    @Get('customer/:customerId')
    findByCustomerId(@Param('customerId') customerId: number) {
      return this.invoiceService.findByCustomerId(customerId);
    }
  }