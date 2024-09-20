import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POSComponent } from './components/pos/pos.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { OrderService } from './service/order.service';
import { RestaurantComponent } from './components/restaurant/restaurant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, POSComponent, KitchenComponent, RestaurantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fastfood';
  constructor(public pedidos: OrderService) {}
}
