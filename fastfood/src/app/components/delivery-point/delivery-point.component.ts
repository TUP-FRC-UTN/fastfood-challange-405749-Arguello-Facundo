import { Component } from '@angular/core';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css',
})
export class DeliveryPointComponent {
  constructor(public pedidos: OrderService) {}

  Entregar(i: number) {
    this.pedidos.pedidosTerminados.splice(i, 1);
  }
}
