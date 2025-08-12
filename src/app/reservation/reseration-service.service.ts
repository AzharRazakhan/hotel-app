import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReserationServiceService {
  private reservations: Reservation[] = [];

  constructor() {
    const saveReservation = localStorage.getItem('reservations');
    this.reservations = saveReservation?.length
      ? JSON.parse(saveReservation)
      : [];
  }

  getReservation(): Reservation[] {
    return this.reservations;
  }

  getReservationById(id: string): Reservation | undefined {
    return this.reservations.find((res) => res.id === id);
  }

  addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteResvertion(id: string): void {
    const idx: any = this.reservations.find((res) => res.id === id);
    this.reservations.splice(idx, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(id: string, reservation: Reservation): void {
    const index: any = this.reservations.findIndex((res) => res.id === id);
    this.reservations[index] = reservation;
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
