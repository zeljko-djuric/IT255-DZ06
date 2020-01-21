import { Hotels } from "./../hotels";
import { Component, Input } from "@angular/core";
import { RoomService } from "./room-service";

import {
  FormGroup,
  FormControl,
  Validators,
  MinLengthValidator
} from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  @Input() hotels: Hotels[];

  constructor(private _RoomService: RoomService) {
    this.hotels = [];
  }

  dodajHotel(
    title: HTMLInputElement,
    price: HTMLInputElement,
    nights: HTMLInputElement
  ): boolean {
    console.log(title.value);
    console.log(price.value);
    console.log(nights.value);
    this.hotels.push(
      new Hotels(title.value, price.valueAsNumber, nights.valueAsNumber)
    );
    return false;
  }

  public deleteHotel(hotels: Hotels) {
    this.hotels = this.hotels.filter(item => {
      return item.title !== hotels.title;
    });
  }

  public _generateString(length) {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public changeContent(hotels: Hotels) {
    let index = this.hotels.findIndex(i => i.title === hotels.title);
    this.hotels[index].title = this._generateString(6);
  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  changeOrder() {
    this.shuffle(this.hotels);
  }
  form = new FormGroup({
    nazivHotelaForma: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ]),
    cenaHotelaForma: new FormControl("", Validators.required),
    nocenjaHotelaForma: new FormControl("", Validators.required)
  });
  public getPrice(numberOfNights: number, price, nights) {
    numberOfNights = price * nights;
    return numberOfNights;
  }

  ngOnInit() {}
}
