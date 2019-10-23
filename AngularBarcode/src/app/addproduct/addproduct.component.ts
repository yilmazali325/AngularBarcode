import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public obj = {
	"barcodeNumber" : "",
	"name" :  "",
  "isCheckedOut" : "",
  "quantity" : ""
  }
  public productName;
  public barcodeNumber;
  public isCheckedOut = false;
  public quantity;
  constructor(private httpService : DataService) { }

  ngOnInit() {
  }
  AddProduct(){
    let url = "http://localhost:8080/product"
    let obj = {
      "barcodeNumber" : this.barcodeNumber,
      "name" :  this.productName,
      "isCheckedOut" : false,
      "quantity" : this.quantity,
      "businessName" : localStorage.getItem("businessName")
      }
      this.httpService.post(url,obj).subscribe(res=>{
        console.log(res);
        alert("succesfully added!");
      }, err =>{
        console.log(err);
        alert("error");
      })
  }
}
