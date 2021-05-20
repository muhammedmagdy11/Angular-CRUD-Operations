import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './Components/students/students.component';
import { StudentdetailsComponent } from './Components/studentdetails/studentdetails.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './Components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentdetailsComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
