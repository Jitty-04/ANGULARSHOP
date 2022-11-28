import { Component } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  image=""
  title=""
  description=""
  price=""
  sellerName=""
  Quantity=""

  readValues=()=>
  {
    let data:any= {"title":this.title,"price":this.price,"description":this.description,"image":this.image,"sellerName":this.sellerName,"Quantity":this.Quantity}
    console.log(data)
  }


}
