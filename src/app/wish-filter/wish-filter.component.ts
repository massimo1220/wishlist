import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css'],
})
export class WishFilterComponent {
  @Input() filter: any;
  // for 2 way binding, we should use "Chnage" as Angular name rule
  @Output() filterChange = new EventEmitter<any>();
  ngOnInit(): void {
    //  construcutor of value! when loading first time
    this.updateFilter('0');
  }
  ListFilter: any = '0';

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter);
  }
}
