import { Component } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { POSComponent } from '../pos/pos.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { DeliveryPointComponent } from '../delivery-point/delivery-point.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [
    POSComponent,
    KitchenComponent,
    DeliveryPointComponent,
    CommonModule,
  ],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
})
export class RestaurantComponent {
  constructor(public pedidos: OrderService) {}
}
