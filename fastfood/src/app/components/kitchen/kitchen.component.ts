import { Component } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css',
})
export class KitchenComponent {
  constructor(public pedidos: OrderService) {}

  Cocinar(p: Order, i: number) {
    this.pedidos.pedidosCocinando.push(p);
    console.log(p);
    this.pedidos.pedidosIngresados.splice(i, 1);
  }

  Enviar() {
    this.pedidos.pedidosTerminados.push(this.pedidos.pedidosCocinando[0]);
    this.pedidos.pedidosCocinando.splice(0, 1);
  }
}
