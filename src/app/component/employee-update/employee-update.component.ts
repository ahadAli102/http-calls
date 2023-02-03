import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  private id!: number

  showStatus = false;


  employee: Employee = {
    id: -1,
    firstName: '',
    lastName: '',
    designation: '',
    email: ''
  }

  oldEmployee!: Employee

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    try {
      this.id = Number.parseInt(this.router.url.split('/').reverse()[0])
      if (!Number.isNaN(this.id)) {
        console.log(`employee id ${this.id}`);
        this.showStatus = false;
        this.employee.id = this.id

      } else {
        this.router.navigateByUrl('/employee');
      }
    }
    catch (e) {
      console.log('employee id is not valid');
    }
    this.employeeExists();
  }

  employeeExists(){
    const ref = this;
    this.employeeService.getEmployee(this.id).subscribe({
      next(response: Employee) {
        ref.oldEmployee = response;
      }, error(message: any) {
        ref.router.navigateByUrl('/employee');
      }
    })
  }



  

  updateEmployee(employeeForm: NgForm) {
    const ref = this;
    const mergedObject = {...this.oldEmployee, ...this.employee};
    this.employeeService.updateEmployee(this.employee).subscribe({
      next(response) {

        employeeForm.reset();
        console.log('adding', ref.employee);
        ref.showStatus = true;

      }, error(message: any) {
        console.log('error', message);
      }, complete() {
        console.log('complete');
      }
    })
  }
}