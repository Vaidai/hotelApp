import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class RoomService {
  private apiServerUri = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiServerUri}/room/all`);
  }
}
