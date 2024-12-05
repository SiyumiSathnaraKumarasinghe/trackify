import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HomeComponent } from './app/home/home.component';
import { TaskListComponent } from './app/task-list/task-list.component';
import { TaskFormComponent } from './app/task-form/task-form.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'task-form', component: TaskFormComponent },
  { path: 'task-form/:id', component: TaskFormComponent }, // For editing tasks
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      RouterModule,
      MatToolbarModule,
      MatButtonModule,
      MatTableModule,
      MatInputModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatIconModule,
      MatCheckboxModule,
      MatSnackBarModule,
      HttpClientModule // Add HttpClientModule here
    ),
    provideRouter(routes), // Add routing providers here
  ]
});  
