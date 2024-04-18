import { FileService } from '@/file/file.service';
import { Controller, Get, Param, Res, StreamableFile } from '@nestjs/common';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get(':id')
  async getFileById(@Param('id') id: number, @Res({ passthrough: true }) res: Response) {
    const data = await this.fileService.findOne(id);
    const file = createReadStream(join(process.cwd(), `upload/${data.fileName}`));
    res.set({
      'Content-Type': data.mimeType,
    });
    return new StreamableFile(file);
  }
}
