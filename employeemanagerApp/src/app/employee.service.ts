import { HttpClient } from "@angular/common/http";
import { Injector , Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "./employee";

@Injectable ({

providedIn: 'root' 

})

export class Employeeservice {
private apiServerUrl = '';
constructor (private http: HttpClient ){}


public getEmployees() : Observable<Employee[]> {

    return this.http.get<any>('${this.apiServerUrl}/employee/all');

}   
public addEmployee (employee : Employee): Observable <Employee> {
    return this.http.post<Employee>('${this.apiServerUrl}/employee/add' ,employee );

}


public updateEmployee (employee : Employee): Observable <Employee>{
    return this.http.put<Employee> ('${this.apiServerUrl}/employee/update' ,employee );
}


public deleteEmployee (employeeId : number): Observable <void>{
    return this.http.delete<void> ('${this.apiServerUrl}/employee/delete/${employeeId}');
    
}
}
