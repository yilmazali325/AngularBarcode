import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../services/data.service';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { MatSort } from '@angular/material';

@Component({
  selector: 'app-globalcheckedoutlist',
  templateUrl: './globalcheckedoutlist.component.html',
  styleUrls: ['./globalcheckedoutlist.component.css']
})
export class GlobalcheckedoutlistComponent implements OnInit {
  exportAsConfigForPdf: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementId: 'checkout', // the id of html/table element
  }
  exportAsConfigForWord: ExportAsConfig = {
    type: 'doc', // the type you want to download
    elementId: 'checkout', // the id of html/table element
  }
  exportAsConfigForExcel: ExportAsConfig = {
    type: 'xls', // the type you want to download
    elementId: 'checkout', // the id of html/table element
  }
  exportAsConfigForPng: ExportAsConfig = {
    type: 'png', // the type you want to download
    elementId: 'checkout', // the id of html/table element
  }
  displayedColumns: string[] = ['id', 'barcodeNumber', 'name', 'isCheckedOut','quantity','email','date','businessName'];
  dataSource = new MatTableDataSource<any>();
  pipe: DatePipe;

  filterForm = new FormGroup({
      fromDate: new FormControl(),
      toDate: new FormControl(),
  });

  get fromDate() { return this.filterForm.get('fromDate').value; }
  get toDate() { return this.filterForm.get('toDate').value; }

  constructor(private httpService:DataService, private exportAsService: ExportAsService) {

   }
   applyFilter() {
    this.dataSource.filter = ''+Math.random();
    this.pipe = new DatePipe('en');
    this.dataSource.filterPredicate = (data, filter) =>{
      if (this.fromDate && this.toDate) {
        return data.created >= this.fromDate && data.created <= this.toDate;
      }
      return true;
    }
  }
  @ViewChild(MatSort) sort: MatSort

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.httpService.get("http://localhost:8080/checkout").subscribe(res=>{
      console.log(res);
      this.dataSource.data = res as [];
    },err => {
      console.log(err);
    })
  }

  exportAsPdf(){
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfigForPdf, 'PdfReport').subscribe(() => {
      // save started
    });
  }

  exportAsExcel(){
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfigForExcel, 'ExcelReport').subscribe(() => {
      // save started
    });
  }

  exportAsPng(){
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfigForPng, 'PngReport').subscribe(() => {
      // save started
    });
  }

  exportAsWord(){
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfigForWord, 'WordReport').subscribe(() => {
      // save started
    });
  }
}
