import { RACES } from './mocks';
import { Injectable } from '@angular/core';


@Injectable()
export class RacesService {
  getRaces() {
    return RACES;
  }
}
