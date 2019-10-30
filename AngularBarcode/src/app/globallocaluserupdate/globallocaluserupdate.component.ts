import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-globallocaluserupdate',
  templateUrl: './globallocaluserupdate.component.html',
  styleUrls: ['./globallocaluserupdate.component.css']
})
export class GloballocaluserupdateComponent implements OnInit {
  public id;
  public firstName;
  public lastName;
  public email;
  public password;
  public role;
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
      "role" : "local",
      "businessName":localStorage.getItem("businessName"),
      "accountDisabledStatus" : this.accountStatus
    }
    console.log(obj);
    this.httpService.put(url,obj).subscribe(res=>{
      console.log(res);
      alert("User updated successfully!")
    },err=>{
      console.log(err);
      alert("An error has been occurred!")
    })
  }
  getUserById(){
    let url = environment.url + "/user/local/id?id=" + this.id + "&role=local";
    this.httpService.get(url).subscribe(res=>{
      console.log(res);
      let obj = Object(res);
      this.firstName = obj.firstName;
      this.lastName = obj.lastName;
      this.email = obj.email;
      this.password = obj.password;
      this.accountStatus = obj.accountDisabledStatus;
      localStorage.setItem("businessName",obj.businessName);
    },err=>{
      console.log(err);
      alert("An error has been occurred!")
    })
  }
}
