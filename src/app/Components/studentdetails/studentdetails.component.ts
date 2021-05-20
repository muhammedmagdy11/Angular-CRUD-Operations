import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.less']
})
export class StudentdetailsComponent implements OnInit {

  constructor(private myroute:ActivatedRoute,private mysrvice:StudentsService) { }
student:any;
  ngOnInit(): void {
    this.mysrvice.getStudent(this.myroute.snapshot.params.id).subscribe(
      (res)=>{this.student=res;},
      (error)=>{alert(error);}
    );
  }

}
