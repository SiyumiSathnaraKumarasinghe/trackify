import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define and export the Task interface for TypeScript type checking
export interface Task {
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  _id?: string; // Optional ID field
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Backend URL for API calls (update this to match your backend URL)
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  // Get all tasks from the backend API
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Add a new task
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  // Update a task by its ID
  updateTask(id: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, task);
  }

  // Delete a task by its ID
  deleteTask(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
