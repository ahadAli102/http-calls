import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  constructor(private http: HttpClient) { }


  getAllEmployees() {
    return this.http.get<any>('http://localhost:8080/hsenid/api/v1/employees');
  }


}
