import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDTO, TaskService } from './task.service';

export interface FilterTasksDTO {
  id?: number;
  title?: string;
  description?: string;
  status?: string;
}

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  public async get(filter: FilterTasksDTO) {
    try {
      return {
        status: 200,
        data: await this.taskService.find(filter),
      };
    } catch (error) {
      console.error(error);
    }
  }

  @Post()
  public post(data: CreateTaskDTO) {
    try {
      return {
        status: 200,
        data: this.taskService.save(data),
      };
    } catch (error) {
      console.error(error);
    }
  }

  @Delete(':id')
  public delete(@Param() id) {
    try {
      return {
        status: 200,
        data: this.taskService.delete(id),
      };
    } catch (error) {
      console.error(error);
    }
  }
}
