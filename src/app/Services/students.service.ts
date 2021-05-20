import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
Url="http://localhost:3000/students";

  constructor(private Ourclient:HttpClient) { 
  }
  getAllStudents(){
return this.Ourclient.get(this.Url,{observe:"response"});
  }
  getStudent(id:any){
    return this.Ourclient.get(this.Url+"/"+id);
  }
  addStudent(student:any){
   return this.Ourclient.post(this.Url,student);
  }
  deleteStudent(id:any){
    return this.Ourclient.delete(this.Url+"/"+id);
  }
  updateStudent(id:any,student:any){
    return this.Ourclient.patch(this.Url+"/"+id,student);
  }
}
