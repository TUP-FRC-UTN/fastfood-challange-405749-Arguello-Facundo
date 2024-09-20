import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {}

  pedidosIngresados: Order[] = [];
  pedidosCocinando: Order[] = [];
  pedidosTerminados: Order[] = [];

  obtenerPedido(p: Order) {
    p.number = Math.floor(Math.random() * 1000) + 1;
    this.pedidosIngresados.push(p);
    console.log(this.pedidosIngresados);
  }
}
