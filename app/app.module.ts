import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CarPartsComponent } from './car-parts.component';
import { RacingAppComponent } from './racing-app.component';
import { CarPartsService } from './car-parts.service';
import { RacesService } from './races.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    CarPartsComponent,
    RacingAppComponent

  ],
  bootstrap:    [ AppComponent ],
  providers: [ CarPartsService, RacesService ]
})
export class AppModule { }
