import { Injectable } from '@nestjs/common';
import { Task, TaskDTO } from './entities/task';
import { TaskRepository } from './task.repository';
import { FilterTasksDTO } from './task.controller';

export interface CreateTaskDTO {
  title: string;
  description: string;
  status: string;
}

@Injectable()
export class TaskService {
  constructor(private taskRepository: TaskRepository) {}

  public async save(data: CreateTaskDTO): Promise<TaskDTO> {
    // @ts-ignore
    return await this.taskRepository.add(
      new Task({
        ...data,
      }),
    );
  }

  public async find(filter: FilterTasksDTO): Promise<TaskDTO[]> {
    return await this.taskRepository.findMany(filter);
  }

  public async delete(id: number): Promise<TaskDTO> {
    return await this.taskRepository.delete(id);
  }
}
