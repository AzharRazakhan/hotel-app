import { Component, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservation';
import { ReserationServiceService } from '../reseration-service.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'],
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reserationSer: ReserationServiceService) {}

  ngOnInit(): void {
    this.reservations = this.reserationSer.getReservation();
  }
  onDelete(id: string) {
    this.reserationSer.deleteResvertion(id);
  }
}
