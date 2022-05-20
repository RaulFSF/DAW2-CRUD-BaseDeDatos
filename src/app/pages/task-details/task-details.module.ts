import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from '../../material/material.module';
import { TaskDetailsComponent } from "./task-details.component";
import { TaskDetailRoutingModule } from "./task-details.routing.module";


@NgModule({
    declarations: [
        TaskDetailsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        TaskDetailRoutingModule
    ]
})

export class TaskDetailModule{}