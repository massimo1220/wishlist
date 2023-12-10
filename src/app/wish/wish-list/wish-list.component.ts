// inputdecorator is important!
import { Component, Input, InputDecorator } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
})
export class WishListComponent {
  //@input is important
  @Input() wishes: WishItem[] = [];
}