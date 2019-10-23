import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-businessaccountadd',
  templateUrl: './businessaccountadd.component.html',
  styleUrls: ['./businessaccountadd.component.css']
})
export class BusinessaccountaddComponent implements OnInit {
  public firstName;
  public lastName;
  public email;
  public role;
  public password;
  public businessName;
  public accountStatuses:any;
  public accountStatus;
  constructor(private httpService : DataService) { 
    this.accountStatuses = [true,false];
  }

  ngOnInit() {
  }

  addUser(){
    let obj = {
      "firstName" : this.firstName,
      "lastName" : this.lastName,
      "email" : this.email,
      "role" : "admin",
      "businessBoolean" : true,
      "password" : this.password,
      "businessName" : this.businessName,
      "accountDisabledStatus" : this.accountStatus
    }
    console.log(obj);
    let url = environment.url + "/user/register";
    this.httpService.post(url,obj).subscribe(res=>{
        console.log(res);
        alert("Account added!")
    },err=>{
        console.log(err);
        alert("An error occurred!")
    })

  }

}
