import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task, TaskModel } from '../../interface/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  list: any[] = [];
  taskForm: TaskModel ={
      title: '',
      desc: '',
      done: false
  }
  constructor(private taskService: TaskService) { }

  async ngOnInit() {
    await this.getTasks();
  }

  async getTasks() {
    const res = await this.taskService.getData();
    this.list = res;
  }

  async createTask(){    
    this.taskService.addData(this.taskForm)
    this.list = await this.taskService.getData();
  }
}
