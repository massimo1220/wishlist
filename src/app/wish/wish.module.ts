import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishListComponent } from './add-wish-list/add-wish-list.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';

@NgModule({
  declarations: [
    WishListComponent,
    AddWishListComponent,
    WishFilterComponent,
    WishListItemComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [
    WishListComponent,
    AddWishListComponent,
    WishFilterComponent,
    WishListItemComponent
  ]
})
export class WishModule {}
