import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export interface SchoolElement {
  short_name: string;
  _id: string;
  students: number;
  correction: number;
  diff:number
}
export interface StudentElement {
  _id: string;
  student_id:any;
  school_origin_id: any;
  school_correcting_id: any;
  school_correcting_corrector_id:any;
  status:string;
  count_document:number;
}
export interface CorrectorElement {
  school_correcting_corrector_id:any[]                                              
}
export interface SchoolCorrectorElement{
  school:any[],
  cross_corrector:any[];
}
export interface SchoolListElement{
  school:any[],
}
@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseUrl="assets/cross-correction/";
  constructor(private http: HttpClient) { }
  getStudent():Observable<HttpResponse<StudentElement[]>>{
    return this.http.get<StudentElement[]>(this.baseUrl+"students-table-list.json",{ observe: 'response' });
  }
  getSchoolTable():Observable<HttpResponse<SchoolElement[]>>{
    return this.http.get<SchoolElement[]>(this.baseUrl+"school-table-list.json",{ observe: 'response' });
  }
  getSchoolList():Observable<HttpResponse<SchoolListElement[]>>{
    return this.http.get<SchoolListElement[]>(this.baseUrl+"school-list.json",{ observe: 'response' });
  }
  getSchoolCorrector():Observable<HttpResponse<SchoolCorrectorElement[]>>{
    return this.http.get<SchoolCorrectorElement[]>(this.baseUrl+"school-corrector-list.json",{ observe: 'response' });
  }
  getCorrector():Observable<HttpResponse<CorrectorElement[]>>{
    return this.http.get<CorrectorElement[]>(this.baseUrl+"corrector-list.json",{ observe: 'response' });
  }
}
