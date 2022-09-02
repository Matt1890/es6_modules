import { Car } from "./car.js";

export class Wishlist {
  constructor() {
    this.list = [];
    this.nextId = 0;
  }
  add (make, model, year){
    let car = new Car (this.nextId ++, make, model, year)
    this.list.push (car)
  }
  remove(id){
    let idx = this.list.findIndex ((car) => car.id == id)
    this.list.splice(idx,1)
  }
}
