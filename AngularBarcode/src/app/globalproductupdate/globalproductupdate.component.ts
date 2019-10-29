import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-globalproductupdate',
  templateUrl: './globalproductupdate.component.html',
  styleUrls: ['./globalproductupdate.component.css']
})
export class GlobalproductupdateComponent implements OnInit {
  public barcodeNumber;
  public quantity;
  public productName;
  public product;
  public id;
  public disableValue = false;
  constructor(private httpService : DataService) { }

  ngOnInit() {
  }
  getProductById(){
    let url = environment.url + "/product/id?id=" + this.id;
    console.log("url " + url);
    this.httpService.get(url).subscribe(res=>{
      this.product = res;
      let obj = Object(res);
      this.barcodeNumber = obj.barcodeNumber;
      this.quantity = obj.quantity;
      this.productName = obj.name;
      this.disableValue = true;
      console.log(this.product);
    },err=>{
      console.log(err);
      alert("An error has been occurred retriving product!")
    })
  }
  updateProduct(){
    let obj = {
      "id" : this.id,
      "name":this.productName,
      "barcodeNumber" : this.barcodeNumber,
      "quantity" : this.quantity
    }
    let url = environment.url +"/product/update";
    console.log("url: " + url);
    this.httpService.put(url,obj).subscribe(res=>{
      console.log(res);
      alert("Succesfully updated!")
    },err=>{
      console.log(err);
      alert("Succesfully updated!")
    })
  }
}
