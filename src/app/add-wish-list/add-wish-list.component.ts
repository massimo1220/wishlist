// outputm eventemitter is very important
import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'add-wish-list',
  templateUrl: './add-wish-list.component.html',
  styleUrls: ['./add-wish-list.component.css'],
})
export class AddWishListComponent {
  @Output() addWish = new EventEmitter<WishItem>();

  newWishText = '';

  addNewWish() {
    //this.items.push(new WishItem(this.newWishText));
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
