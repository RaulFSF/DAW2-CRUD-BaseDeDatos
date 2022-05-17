import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: any;
  @Output() delete = new EventEmitter();
  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteTask(): void{
    this.taskService.deleteData(this.task.id);
    this.delete.emit();
  }

  taskDetails() {
    this.router.navigate(['/task/' + this.task.id]);
  }

  changeDone(){
    if(this.task.done){
      this.task.done = false;
    } else{
      this.task.done = true;
    }
    console.log(this.task);
    
    this.taskService.updateData(this.task.id, this.task);
  }

}
