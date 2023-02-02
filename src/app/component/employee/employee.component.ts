import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,private router: Router) {

  } ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next(response: any) {
        console.log('Employee ',response);
      }, error(message: any) {
        console.log('error',message);
      }, complete() {
        console.log('complete');
      }
    });
  }

  update(id: number) {
    this.router.navigateByUrl(`/employee/edit/${id}`);
  }
}

