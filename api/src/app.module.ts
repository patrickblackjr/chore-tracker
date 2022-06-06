import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { ChoresModule } from './chores/chores.module'

@Module({
  imports: [UsersModule, ChoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
