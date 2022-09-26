import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomService } from './room.service';
import { RoomsComponent } from './rooms/rooms.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './registration.service';

@NgModule({
  declarations: [AppComponent, RoomsComponent, RegistrationComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [RoomService, RegistrationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
