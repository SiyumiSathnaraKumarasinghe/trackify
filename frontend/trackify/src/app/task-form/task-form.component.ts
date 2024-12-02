import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.service'; // Import Task interface

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    FormsModule,
  ],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  isEdit: boolean = false;
  task: Task = {
    title: '',
    description: '',
    dueDate: '',
    completed: false,
  };

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.isEdit = true;
      this.taskService.getTasks().subscribe((tasks) => {
        const foundTask = tasks.find((t) => t._id === taskId);
        if (foundTask) {
          this.task = { ...foundTask }; // Spread operator to safely assign properties
        }
      });
    }
  }

  onSubmit() {
    if (this.isEdit) {
      this.taskService.updateTask(this.task._id!, this.task).subscribe(() => {
        console.log('Task updated successfully!');
        this.router.navigate(['/task-list']);
      });
    } else {
      this.taskService.addTask(this.task).subscribe(() => {
        console.log('Task added successfully!');
        this.router.navigate(['/task-list']);
      });
    }
  }
}
