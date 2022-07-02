import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../modules/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg (){
   
   this.subject.next(Product)  // triger the message
  }
  getMsg(){
    return this.subject.asObservable()
  }
}
