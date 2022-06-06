import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateChoreDto } from './dto/create-chore.dto'
import { UpdateChoreDto } from './dto/update-chore.dto'
import { Chore } from './chore.entity'

@Injectable()
export class ChoresService {
  constructor(
    @InjectRepository(Chore)
    private readonly choresRepository: Repository<Chore>,
  ) {}

  create(createChoreDto: CreateChoreDto): Promise<Chore> {
    const chore = new Chore()
    chore.title = createChoreDto.title
    chore.description = createChoreDto.description || null

    return this.choresRepository.save(chore)
  }

  findAll() {
    return this.choresRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} chore`
  }

  update(id: number, updateChoreDto: UpdateChoreDto) {
    return `This action updates a #${id} chore`
  }

  remove(id: number) {
    return `This action removes a #${id} chore`
  }
}
