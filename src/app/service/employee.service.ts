import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL+'/employees').pipe(
      map(employees=> employees.map(employee => ({
        id:employee.id,
        firstName:employee.firstName,
        lastName:employee.lastName,
        designation:employee.designation,
        email:employee.email === null ? 'No email' : employee.email,
      })))
    );
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.API_URL + '/employees/' + id);
  }


}
