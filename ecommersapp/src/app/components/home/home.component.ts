import { Component, OnInit } from '@angular/core';
 import{Router} from '@angular/router';
 import 'jarallax';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
 export class HomeComponent implements OnInit {

   ngAfterViewInit() {
     jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
     });
  }

  constructor(private router:Router) { }
  goTopage(pageName:String):void{
  
    this.router.navigate([`${pageName}`])
  }

  ngOnInit(): void {
  }
}

function jarallax(arg0: NodeListOf<Element>, arg1: { speed: number; }) {
  throw new Error('Function not implemented.');
}

