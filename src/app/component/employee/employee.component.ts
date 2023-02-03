import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  allEmployees: Employee[] = [];
  showEmployee = false;

  constructor(private employeeService: EmployeeService, private router: Router) {

  } ngOnInit(): void {
    const ref = this;
    this.employeeService.getAllEmployees().subscribe({
      next(response: Employee[]) {
        ref.showEmployee = response.length > 0;
        ref.allEmployees = response;
      }, error(message: any) {
        console.log('error', message);
      }, complete() {
        console.log('complete');
      }
    });

    this.employeeService
  }

  update(id: number) {
    this.router.navigateByUrl(`/employee/edit/${id}`);
  }

  delete(id: number) {
    const ref = this;
    console.log(`delete ${id}`);
    this.employeeService.deleteEmployee(id).subscribe({
      next(response) {
        let index = -1;
        ref.allEmployees.forEach((employee, i) => {
          if (employee.id === id) {
            index = i;
          }
        })
        ref.allEmployees.splice(index, 1);
        ref.showEmployee = ref.allEmployees.length > 0;
      }, error(message: any) {
        console.log('error', message);
      }, complete() {
        console.log('complete');
      }
    })
  }
}

