import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.less']
})
export class UpdateComponent implements OnInit {

  constructor(private router:Router,private myroute:ActivatedRoute,private mysrvice:StudentsService) { }
student:any;
  ngOnInit(): void {
    this.mysrvice.getStudent(this.myroute.snapshot.params.id).subscribe(
      (res)=>{this.student=res;},
      (error)=>{alert(error);}
    );
  }
Update(){
  this.mysrvice.updateStudent(this.myroute.snapshot.params.id,this.student).subscribe(
()=>{ this.router.navigate(['students']);},
(er)=>{console.log(er);}
  );
}
}
