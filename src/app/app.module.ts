import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './pages/task-list/task-list.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailsComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    provideFirebaseApp(()=> initializeApp(environment.firebase)),
    provideAuth(()=> getAuth()),
    provideFirestore(()=> getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
