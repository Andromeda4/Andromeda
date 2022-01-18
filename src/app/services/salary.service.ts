import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Salary } from './salary';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  public getData(tableName: string): Observable<any> {
    return of(Salary[tableName]);
  }
}
