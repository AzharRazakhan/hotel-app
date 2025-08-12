import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReserationServiceService } from '../reseration-service.service';
import { Reservation } from 'src/app/models/reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css'],
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private reservationServ: ReserationServiceService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    let id = this.activateRoute.snapshot.paramMap.get('id');
    if (id) {
      let reservation: any = this.reservationServ.getReservationById(id);
      this.reservationForm.patchValue(reservation);
    }
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      const reservation: Reservation = this.reservationForm.value;
      let id = this.activateRoute.snapshot.paramMap.get('id');
      if (id) {
        this.reservationServ.updateReservation(id, reservation);
      } else {
        this.reservationServ.addReservation(reservation);
      }
      this.router.navigate(['/list']);
    }
  }
}
