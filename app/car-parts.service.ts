import { CARPARTS } from './mocks';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CarPartsService {

 //  constructor (private http: Http) {}

  getCarParts() {
    return CARPARTS; // mock data
    // return this.http.get('api/carparts.json').map(response => <CarParts[]> response.json().data);
  }
}
