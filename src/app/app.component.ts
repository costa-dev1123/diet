import { Component } from '@angular/core';
import * as moment from 'moment';
import { InterfacePasti } from './interfaces/interface-pasti';
import { DietService } from './services/diet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dieta';
  day: InterfacePasti[] = [];
  now = moment().isoWeekday();


  constructor(private _service: DietService) { }

  ngOnInit(): void {
    this._service.get().subscribe((data: any) => {
      this.day = data;

    })
  }





  // weekDays(){
  //   if(this.now === 1 || this.now === 2 || this.now === 3){
  //     console.log(this.day[0], this.day[1], this.day[2])
  //   }
  //   if(this.now === 4 || this.now === 5 || this.now === 6){
  //     console.log(this.day[3], this.day[4], this.day[5])
  //   }
  // }



}
