import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

   cartItems=[
       {id:0,productId:0,productName:'Test 0', qty:0,price:0},
     {id:2,productId:2,productName:'Test 2', qty:3,price:150},
     {id:3,productId:3,productName:'Test 3', qty:2,price:50},
     {id:4,productId:4,productName:'Test 4', qty:1,price:200},
     {id:5,productId:5,productName:'Test 5', qty:5,price:100},
  ];
  cartTotal=0;
  
  constructor( private msg :MessengerService) {
   }

  ngOnInit(): void
   {
      this.msg.getMsg().subscribe()

    this.cartItems.forEach(item =>{
      this.cartTotal += (item.qty * item.price)
      })

  }

}
