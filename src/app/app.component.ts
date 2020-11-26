import { Component } from '@angular/core';
import { ClickTravelService } from 'src/app/click-travel.service';
import { Destination } from './models/destination';
import { Ticket } from './models/ticket';
import {filter, map} from 'rxjs/operators';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private baseService: ClickTravelService) {
    this.getDestinations();
  }

  destinations: Destination[];

  getDestinations(): void{
    this.baseService.get('/destinations').pipe().subscribe(destinations => {
      console.log(destinations);
      this.destinations = destinations;
    });
  }

}




