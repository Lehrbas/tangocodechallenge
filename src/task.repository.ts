import { Injectable } from '@nestjs/common';
import { Task, TaskDTO } from './entities/task';
import { FilterTasksDTO } from './task.controller';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TaskRepository {
  constructor(private prisma: PrismaService) {}

  public async add(entity: Task) {
    console.log(entity);
    return await this.prisma.task.create({
      data: {
        title: entity.getTitle(),
        description: entity.getDescription(),
        status: entity.getStatus(),
      },
    });
  }

  public async findMany(filter: FilterTasksDTO): Promise<TaskDTO[]> {
    return await this.prisma.task.findMany({
      where: filter,
    });
  }

  public async delete(id: number) {
    return await this.prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
}
