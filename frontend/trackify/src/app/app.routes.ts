import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component'; // Assuming you have this component

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route (home page)
  { path: 'task-form', component: TaskFormComponent },  // Task form route
  { path: 'task-list', component: TaskListComponent },  // Task list route
  
];
