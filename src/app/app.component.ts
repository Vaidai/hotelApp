import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Guest } from './guest';
import { Registration } from './registration';
import { RegistrationService } from './registration.service';
import { Room } from './room';
import { RoomService } from './room.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hotel';

  public rooms!: Room[];
  public activeRegistrations!: Registration[];
  public historyRegistrations!: Registration[];

  displayCheckInForm = false;
  toDisplay = true;
  viewRegistration = true;

  constructor(
    private roomService: RoomService,
    private registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.getRooms();
  }

  public getRooms(): void {
    this.roomService.getRooms().subscribe(
      (data: Room[]) => {
        this.rooms = data;
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        alert('error message');
      }
    );
  }

  public showHistory(roomId: number) {
    debugger;
    this.registrationService.showRoomHistory(roomId).subscribe(
      (data: Registration[]) => {
        debugger;
        console.log(data);
        this.historyRegistrations = data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  viewActiveRegistrations() {
    this.viewRegistration = !this.viewRegistration;
  }

  public onAddGuest(addForm: NgForm) {
    document.getElementById('close-checkIn-form')?.click();
    const guest: Guest = {
      firstName: addForm.value.firstName,
      lastName: addForm.value.lastName,
    };
    this.registrationService.registerAGuest(guest).subscribe(
      (data) => {
        addForm.reset();
        if (data === null) {
          alert("You can't register a guest. There is no empty rooms!");
        } else {
          alert('Succesfullt register a guest');
          this.getRooms();
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onCheckOut(roomNumber: number) {
    this.registrationService.checkOutAGuest(roomNumber).subscribe(
      (data) => {
        if (data === null) {
          alert("You can't check out a guest. There is some problems!");
        } else {
          alert('Succesfullt check out a guest');
          this.getRooms();
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onActiveRegitrationsShow() {
    this.registrationService.showCheckedInRooms().subscribe(
      (data: Registration[]) => {
        this.activeRegistrations = data;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
