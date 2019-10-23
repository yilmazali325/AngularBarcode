import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {
  private firstName;
  private lastName;
  private email;
  private role;
  private password;

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
      "role" : "local",
      "password" : this.password,
      "accountDisabledStatus" : this.accountStatus,
      "businessName" : localStorage.getItem("businessName")
    }
    let url = environment.url + "/user/register";
    this.httpService.post(url,obj).subscribe(res=>{
        console.log(res);
        alert("User has been updated!")
    },err=>{
        console.log(err);
        alert("An error has been occurred!")
    })

  }

}
