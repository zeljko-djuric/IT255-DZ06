import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FilterPipePipe } from "./helpers/filter-pipe.pipe";
import { HotelsComponent } from "./hotels/hotels.component";
import { DodajHotelComponent } from "./dodaj-hotel/dodaj-hotel/dodaj-hotel.component";
import { RoomService } from "./room-service";

@NgModule({
  declarations: [
    AppComponent,
    FilterPipePipe,
    HotelsComponent,
    DodajHotelComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule {}
