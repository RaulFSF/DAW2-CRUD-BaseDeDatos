import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  constructor(private TaskService: TaskService) { }

  ngOnInit(): void {
  }

}
