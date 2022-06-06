import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { Chore } from './chore.entity'
import { ChoresService } from './chores.service'
import { CreateChoreDto } from './dto/create-chore.dto'
import { UpdateChoreDto } from './dto/update-chore.dto'

@Controller('chores')
export class ChoresController {
  constructor(private readonly choresService: ChoresService) {}

  @Post()
  create(@Body() createChoreDto: CreateChoreDto): Promise<Chore> {
    return this.choresService.create(createChoreDto)
  }

  @Get()
  findAll(): Promise<Chore[]> {
    return this.choresService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.choresService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChoreDto: UpdateChoreDto) {
    return this.choresService.update(+id, updateChoreDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.choresService.remove(+id)
  }
}
