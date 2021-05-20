import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.less']
})
export class StudentsComponent implements OnInit {
  students: any;
  constructor(private router:ActivatedRoute,private ourService:StudentsService) {

   }
id:any;
name:any;
city:any;
myid:any;
  ngOnInit(): void {
    this.ourService.getAllStudents().subscribe(
      (response)=>{this.students=response.body},
      (error)=>{alert(error);}
    );
  }
Add(){
let mystudent={id:this.id,name:this.name,City:this.city};
this.ourService.addStudent(mystudent).subscribe();

this.ngOnInit(); 
}
Delete(id:any){
console.log(id);
this.ourService.deleteStudent(id).subscribe();
this.ngOnInit(); 

}
}
