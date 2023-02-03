import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  showStatus = false;


  employee: Employee = {
    id: -1,
    firstName: '',
    lastName: '',
    designation: '',
    email: ''
  }

  ngOnInit(): void {
    this.showStatus = false;
  }


  addEmployee(employeeForm: NgForm) {
    const ref = this;

    this.employeeService.addEmployee(this.employee).subscribe({
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
