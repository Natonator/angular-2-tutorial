import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
      <car-parts></car-parts>
      <racing-app></racing-app>
    `
})
export class AppComponent {
  title = 'Ultra Racing!';
}
