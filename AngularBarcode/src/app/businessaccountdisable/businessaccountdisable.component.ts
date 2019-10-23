import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-businessaccountdisable',
  templateUrl: './businessaccountdisable.component.html',
  styleUrls: ['./businessaccountdisable.component.css']
})
export class BusinessaccountdisableComponent implements OnInit {
  public id;
  constructor(private httpService : DataService) { }

  ngOnInit() {
  }
  deleteUser(){
    let url = environment.url + "/user/delete?id=" + this.id;
    this.httpService.delete(url).subscribe(res=>{
      console.log(res);
      alert("User has been deleted!")
    },err=>{
      console.log(err);
      alert("An error has been occurred!")
    })
  }
}
