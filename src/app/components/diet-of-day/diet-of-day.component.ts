import { Component, Input, OnInit } from '@angular/core';
import { InterfacePasti } from 'src/app/interfaces/interface-pasti';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as moment from 'moment';



@Component({
  selector: 'app-diet-of-day',
  templateUrl: './diet-of-day.component.html',
  styleUrls: ['./diet-of-day.component.css']
})
export class DietOfDayComponent implements OnInit {

  @Input('d') day : InterfacePasti[] = [];
  @Input ('startPosition') startPosition : number = 0;

  moment: any = moment


  constructor() { 
    moment.locale('it')
  }

  ngAfterViewInit(): void {
   let giorno = document.getElementById(this.startPosition.toString())
   giorno?.scrollIntoView()
    
  }

  customOptions: OwlOptions = {}
  ngOnInit(): void {
  
   this.customOptions = {
      loop: false,
      items: 3,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: true,
      // navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 3,
        },
        400: {
          items: 3,
        },
        740: {
          items: 3,
        },
        940: {
          items: 3,
        },
      },
      nav: false,
      startPosition: this.startPosition > 3 ? 5 : 0
  
    };
  }

  
}
