import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';
import { Task } from '../../interface/task';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  task!: Task;
  taskId: string = "";
  constructor(private taskService: TaskService, private router: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      this.taskId = params['id'];
    })
    this.task = await this.taskService.getTaskById(this.taskId)
  }

  update(){
      this.taskService.updateData(this.taskId, this.task);
      this.router.navigate(['']);
  }

}
