import { Component, OnInit } from '@angular/core';
import {BasketService} from '../../basket/basket.service';
import {IBasketItem} from '../../shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent  {

  constructor(public basketService: BasketService) {}

  getCount(items: IBasketItem[]) {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

}
