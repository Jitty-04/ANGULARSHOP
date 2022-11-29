import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent {

  constructor(private api:ApiService){
    api.fetchProduct().subscribe(

    (response)=>
    {
      this.products=response;
    }
    )
  }
   products:any=[]

}
