import { Component } from '@angular/core';
import { Races } from './races';
import { RACES } from './mocks';
import { RacesService } from './races.service';

@Component({
  selector: 'racing-app',
  templateUrl: 'app/racing-app.component.html',
  styleUrls: ['app/racing-app.component.css'],
})
export class RacingAppComponent {
  heading = "Ultra Racing Schedule"
  cash = 10000;
  races : Races[];

  constructor (private racesService: RacesService) {}

  ngOnInit() {
    this.races = this.racesService.getRaces();
  }

  totalCost() {
    let sum=0;
    for(let race of this.races){
      if(race.isRacing){
        sum += race.entryFee;
      }
    }

    return sum;
  }
}
