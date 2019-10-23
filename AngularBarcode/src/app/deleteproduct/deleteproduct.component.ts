import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
  public id ;

  constructor(private httpService : DataService) { }

  ngOnInit() {
  }
  deleteProductById(){
    let url = environment.url + "/product?id=" + this.id;
    this.httpService.delete(url).subscribe(res=>{
      alert("Succesfully deleted!");
    },err=>{
      alert(err);
      alert("An error has been occurred!")
    })
  }
}
