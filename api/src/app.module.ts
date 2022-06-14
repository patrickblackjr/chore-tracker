import { Module } from '@nestjs/common'
// import { UsersModule } from './users/users.module'
import { ChoresModule } from './chores/chores.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'chore-tracker',
      autoLoadEntities: true,
      synchronize: true,
    }),
    // UsersModule,
    ChoresModule,
  ],
})
export class AppModule {}
