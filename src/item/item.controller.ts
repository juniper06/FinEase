import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { ItemService } from './item.service';
  import { CreateItemDto } from './dto/create-item.dto';
  import { UpdateItemDto } from './dto/update-item.dto';
  
  @Controller('item')
  export class ItemController {
    constructor(private readonly itemService: ItemService) {}
  
    @Get()
    findAll() {
      return this.itemService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.itemService.findOne(+id);
    }
  
    @Post()
    create(@Body() createItemDto: CreateItemDto) {
      return this.itemService.create(createItemDto);
    }
  
    @Put(':id')
    updateItem(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
      return this.itemService.update(+id, updateItemDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.itemService.remove(+id);
    }
  }