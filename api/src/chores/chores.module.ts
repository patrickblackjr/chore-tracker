import { Module } from '@nestjs/common'
import { ChoresService } from './chores.service'
import { ChoresController } from './chores.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Chore } from './chore.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Chore])],
  controllers: [ChoresController],
  providers: [ChoresService],
})
export class ChoresModule {}
