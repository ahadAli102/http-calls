import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  private id!: number

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    try {
      this.id = Number.parseInt(this.router.url.split('/').reverse()[0])
      if (!Number.isNaN(this.id)) {
        console.log(`employee id ${this.id}`);
      } else {
        this.router.navigateByUrl('/employee');
      }
    }
    catch (e) {
      console.log('employee id is not valid');
    }
  }

}
