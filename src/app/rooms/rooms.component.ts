import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration';
import { RegistrationService } from '../registration.service';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  public rooms!: Room[];
  public smth: boolean = true;
  public historyWindow = false;

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

  public checkIn(roomId: number) {
    alert('in' + roomId);
  }

  public checkOut(roomId: number) {
    alert('out' + roomId);
  }

  public showHistory(roomId: number) {
    alert('h' + roomId);
    this.registrationService.showRoomHistory(roomId).subscribe((data) => {
      debugger;
      this.historyWindow = true;

      console.log(data);
    });
  }
}
