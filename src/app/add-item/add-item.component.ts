import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  productcode=""
  productname=""
  mandate=""
  expdate=""
  brand=""
  price=""
  sellername=""
  distributername=""
  constructor(private api:ApiService){

  }
  readValues=()=>
  {
    let data:any= {"productcode":this.productcode,"productname":this.productname,"mandate":this.mandate,"expdate":this.expdate,"brand":this.brand,"price":this.price,"sellername":this.sellername,"distributername":this.distributername}
  console.log(data)
  this.api.addProduct(data).subscribe(
    (response:any)=>
    {
      console.log(response)
      if (response.status=="success") {
        alert("product added successfully")
       
        this.productcode=""
        this.productname=""
        this.mandate=""
        this.expdate=""
        this.brand=""
        this.price=""
        this.sellername=""
        this.distributername=""
        
      } else {
        alert("something went wrong")
      }
    }
  )
  }
}


  



