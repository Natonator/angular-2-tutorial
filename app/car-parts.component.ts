import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { CARPARTS } from './mocks';
import { CarPartsService } from './car-parts.service';

@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html',
  styleUrls: ['app/car-parts.component.css'],
})

export class CarPartsComponent {
  carParts: CarPart[];

  constructor(private carPartsService: CarPartsService) {}

  ngOnInit() {
    this.carParts = this.carPartsService.getCarParts();
    // this.carParts = this.carPartsService.getCarParts().subscribe(carParts => this.carParts = carParts); // http get method
  }

  totalCarParts() {
    if(Array.isArray(this.carParts)){
      return this.carParts.reduce((prev, current) => prev + current.inStock, 0);
    }
  }

  upQuantity(carpart) {
    if (carpart.quantity < carpart.inStock) carpart.quantity++;
  }

  downQuantity(carpart) {
    if (carpart.quantity > 0) carpart.quantity--;
  }
}
