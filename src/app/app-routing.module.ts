import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './component/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './component/employee-update/employee-update.component';
import { EmployeeComponent } from './component/employee/employee.component';

const routes: Routes = [
  {path:'employee', component:EmployeeComponent},
  {path:'employee/add', component:EmployeeAddComponent},
  {path:'employee/edit/:id', component:EmployeeUpdateComponent},
  {path:'',redirectTo:'/employee',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
