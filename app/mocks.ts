import { CarPart } from './car-part';
import { CarPart } from './races';

export const CARPARTS: CarPart[]  =  [
  {
      "id": 1,
      "name": "Super Tires",
      "description": "These tires are made of vibranium",
      "inStock": 0,
      "price": 1299,
      "isFeatured": false,
      "quantity": 0,

  },
  {
      "id": 2,
      "name": "Mega Tires",
      "description": "These tires are made of adamantium",
      "inStock": 8,
      "price": 1899,
      "isFeatured": true,
      "quantity": 0,

  },
];

export const RACES: Races[] = [
    {
      "id": 1,
      "name": "Daytona Thunderdome",
      "date": "2512-01-04T14:00:00",
      "about": "Race through the ruins of an ancient Florida battle arena.",
      "entryFee": 3200,
      "isRacing": false,
      "isFeatured": true,
      "image": "/images/daytona_thunderdome.jpg",
      "imageDescription": "Race track with laser lanes"
    }, {
      "id": 2,
      "name": "San Francisco Ruins",
      "date": "2512-07-03T20:00:00",
      "about": "Drift down the streets of a city almost sunk under the ocean.",
      "entryFee": 4700,
      "isRacing": false,
      "isFeatured": false,
      "image": "/images/san_francisco_ruins.jpg",
      "imageDescription": "Golden Gate Bridge with lasers"
    }, {
      "id": 3,
      "name": "New York City Skyline",
      "date": "2512-07-12T21:00:00",
      "about": "Fly between buildings in the electronic sky.",
      "entryFee": 4300,
      "isRacing": true,
      "isFeatured": false,
      "image": "/images/new_york_city_skyline.jpg",
      "imageDescription": "Bridge overlooking New York City"
    }
  ];
