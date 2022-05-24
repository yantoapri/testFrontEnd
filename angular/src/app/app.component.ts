import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import school_table from '../assets/cross-correction/school-table-list.json';
import student_table from '../assets/cross-correction/students-table-list.json';
import corrector_list from '../assets/cross-correction/corrector-list.json';
import school_corrector_list from '../assets/cross-correction/school-corrector-list.json';
import school_list from '../assets/cross-correction/school-list.json';

import { AppService,SchoolElement } from "./app.service";

// export interface SchoolElement {
//   short_name: string;
//   _id: string;
//   students: number;
//   correction: number;
//   diff:number
// }
export interface StudentElement {
  _id: string;
  student_id:any;
  school_origin_id: any;
  school_correcting_id: any;
  school_correcting_corrector_id:any;
  status:string;
  count_document:number;
}
const ELEMENT_DATA_SCHOOL: SchoolElement[] =school_table;
const ELEMENT_DATA_STUDENT: StudentElement[] =student_table

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private api: AppService) {}

  displayedColumns: string[] = ['student_id', 'schools_origin_id', 'school_correcting_id', 'cross_corrector_id'];
  displayedColumns1: string[] = ['short_name', 'students', 'correction', 'diff'];
  search:string[]=['search_student','search_school','search_correcting','search_corrector'];
  title = 'angular';
  school_correcting:any={};
  cross_corrector:any={};  
  corrector:any;                                         
  school:any;
  school_correcting_option:any[]=[];
  cross_corrector_option:any=[];
  school_option:any[]=[];

  dataSource = new MatTableDataSource();
  dataSource1 = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatPaginator, {static: true}) paginatorSchool: MatPaginator;

  async getStudent(){
    let response=[];
    await this.api.getStudent()
    .subscribe(data => {
      this.dataSource = new MatTableDataSource(data.body);
      this.dataSource.paginator = this.paginator;
    });
  }
  async getSchool(){
    let response=[];
    await this.api.getSchoolTable()
    .subscribe(data => {
      this.dataSource1 = new MatTableDataSource(data.body);
      this.dataSource1.paginator=this.paginatorSchool;
    });
  }
  async getSchoolCorrector(id){
    let response=[];
    await this.api.getSchoolCorrector()
    .subscribe(data => {
      data.body.forEach(val => {
        if(val.school['_id']==id){
          this.school_correcting_option=val['cross_correctors'];
        }
      });
    });
  }
  async getSchoolList(){
    let response=[];
    await this.api.getSchoolList()
    .subscribe(data => {
      this.school_option=data.body;
    });
  }
  async getCorrector(){
    let response=[];
    await this.api.getCorrector()
    .subscribe(data => {
      this.cross_corrector_option=data.body;
    });
  }
  ngOnInit() {
  this.getStudent();
  this.getSchool();
  // this.getSchoolCorrector();
  this.getSchoolList();
  this.getCorrector();
  }
  
  selectSchoolCorrecting(event){
    this.cross_corrector={};
    this.getSchoolCorrector(event);
  }
  selectCorrector(event){
    console.log(event);
    // this.dataSource1.filteredData.forEach(val => val.correction=(val._id==event)?val.correction++:val.correction);
  }
  

}

