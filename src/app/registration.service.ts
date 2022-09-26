import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guest } from './guest';
import { Registration } from './registration';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
  private apiServerUri = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getAllRegistrations(): Observable<Registration[]> {
    return this.http.get<Registration[]>(
      `${this.apiServerUri}/registration/all`
    );
  }

  public registerAGuest(guest: Guest): Observable<string> {
    return this.http.post<string>(
      `${this.apiServerUri}/registration/register`,
      guest
    );
  }

  public checkOutAGuest(roomId: number): Observable<string> {
    return this.http.put<string>(
      `${this.apiServerUri}/registration/checkOut/${roomId}`,
      roomId
    );
  }

  public showCheckedInRooms(): Observable<Registration[]> {
    return this.http.get<Registration[]>(
      `${this.apiServerUri}/registration/showCheckedInRooms`
    );
  }

  public showRoomHistory(roomId: number): Observable<Registration[]> {
    return this.http.get<Registration[]>(
      `${this.apiServerUri}/registration/showRoomHistory/${roomId}`
    );
  }
}
