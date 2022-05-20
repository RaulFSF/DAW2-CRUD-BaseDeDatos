import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { TaskListComponent } from './pages/task-list/task-list.component';

const routes: Routes = [
  {
    path : '' , 
    component: TaskListComponent
  },
  {
    path: 'task/:id',
    loadChildren: () => import('./pages/task-details/task-details.module').then(details=>details.TaskDetailModule)
  },
  {
    path: '**',
    redirectTo: ''
  },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
