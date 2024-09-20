import { Component } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Order } from '../../models/order';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css',
})
export class POSComponent {
  constructor(private pedidos: OrderService) {}

  Confirmar(form: NgForm) {
    this.pedidos.obtenerPedido(form.value);
    form.reset();
  }
}
