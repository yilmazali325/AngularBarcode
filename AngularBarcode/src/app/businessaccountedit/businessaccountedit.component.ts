import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-businessaccountedit',
  templateUrl: './businessaccountedit.component.html',
  styleUrls: ['./businessaccountedit.component.css']
})
export class BusinessaccounteditComponent implements OnInit {
  public id;
  public firstName;
  public lastName;
  public email;
  public password;
  public role;
  public businessName;
  public accountStatus;
  public accountStatuses:any;

  constructor(private httpService : DataService) {  
      this.accountStatuses = [true,false];
  }

  ngOnInit() {
  }

  updateUser(){
    let url = environment.url + "/user/update";
    let obj = {
      "id" : this.id,
      "firstName" : this.firstName,
      "lastName" : this.lastName,
      "password" : this.password,
      "email" : this.email,
      "role" : "admin",
      "businessBoolean" : true,
      "businessName" : this.businessName,
      "accountDisabledStatus" : this.accountStatus
    }
    this.httpService.put(url,obj).subscribe(res=>{
      console.log(res);
      alert("User has been updated!")
    },err=>{
      console.log(err);
      alert("An error has been occurred!")
    })
  }
  getUserById(){
    let url = environment.url + "/user/business/id?id=" + this.id;
    this.httpService.get(url).subscribe(res=>{
      console.log(res);
      let obj = Object(res);
      this.firstName = obj.firstName;
      this.lastName = obj.lastName;
      this.email = obj.email;
      this.password = obj.password;
      this.accountStatus = obj.accountDisabledStatus;
      this.businessName = obj.businessName;
    },err=>{
      console.log(err);
      alert("An error has been occurred retriving user information!")
    })
  }
}
