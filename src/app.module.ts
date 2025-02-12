import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { PrismaService } from 'prisma/prisma.service';
import { TaskRepository } from './task.repository';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService, PrismaService, TaskRepository],
})
export class AppModule {}
