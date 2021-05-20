import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentdetailsComponent } from './Components/studentdetails/studentdetails.component';
import { StudentsComponent } from './Components/students/students.component';
import { UpdateComponent } from './Components/update/update.component';

const routes: Routes = [
  {path:"",redirectTo:"students",pathMatch:"full"},
  {path:"students",component:StudentsComponent},
  {path:"students/:id",component:StudentdetailsComponent},
  {path:"students/update/:id",component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
