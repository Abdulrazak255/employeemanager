import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Employeeservice } from './employee.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
      public employees : Employee[];

      constructor (private employeeService: Employeeservice ){}
  
  public getEmployees() : void{
  this.employeeService.getEmployees().subscribe (
  
       (response : Employee[])=> {
    this.employees = response ;
  },

  (error : HttpErrorResponse) => {

    alert (error.message);
  }
  
);  
  }
}
