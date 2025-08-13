import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReserationServiceService {
  api = 'http://localhost:3001';
  private reservations: Reservation[] = [];

  constructor(private http: HttpClient) {}

  getReservation(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.api + '/reservations');
  }

  /*   getReservationById(id: string): Reservation | undefined {
    return this.reservations.find((res) => res.id === id);
  } */

  getReservationById(id: string): Observable<Reservation> {
    return this.http.get<Reservation>(this.api + '/reservation/' + id);
  }

  /* addReservation(reservation: Reservation): void {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
  } */

  addReservation(reservation: Reservation): Observable<void> {
    return this.http.post<void>(this.api + '/reservation', reservation);
  }

  /*   deleteResvertion(id: string): void {
    const idx: any = this.reservations.find((res) => res.id === id);
    this.reservations.splice(idx, 1);
  } */

  deleteResvertion(id: string): Observable<void> {
    return this.http.delete<void>(this.api + '/reservation/' + id);
  }

  /*  updateReservation(id: string, reservation: Reservation): void {
    const index: any = this.reservations.findIndex((res) => res.id === id);
    this.reservations[index] = reservation;
  } */

  updateReservation(id: string, reservation: Reservation): Observable<void> {
    return this.http.put<void>(this.api + '/reservation/' + id, reservation);
  }
}
