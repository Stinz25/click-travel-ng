import { Component, OnInit } from '@angular/core';
import {Ticket} from '../models/ticket';
import {ClickTravelService} from '../click-travel.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  constructor(private baseService: ClickTravelService) {
    this.getTickets();
  }

  tickets: Ticket[];

  ngOnInit(): void {
  }

  getTickets(): void{
    this.baseService.get('/tickets').pipe().subscribe(tickets => {
      this.tickets = tickets;
    });
  }

}
