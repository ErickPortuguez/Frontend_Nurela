import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venta } from '../shared/venta.model';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private apiUrl = 'http://localhost:8080/api/ventas';

  constructor(private http: HttpClient) {}

  registrarVenta(venta: Venta): Observable<Venta> {
    return this.http.post<Venta>(`${this.apiUrl}/registrar`, venta);
  }

  listarVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.apiUrl);
  }

  listarVentasActivas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${this.apiUrl}/estado/activo`);
  }

  listarVentasInactivas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(`${this.apiUrl}/estado/inactivo`);
  }

  editarVenta(id: number, venta: Venta): Observable<Venta> {
    return this.http.put<Venta>(`${this.apiUrl}/editar/${id}`, venta);
  }

  eliminarVenta(id: number): Observable<Venta> {
    return this.http.put<Venta>(`${this.apiUrl}/eliminar/${id}`, {});
  }

  restaurarVenta(id: number): Observable<Venta> {
    return this.http.put<Venta>(`${this.apiUrl}/restaurar/${id}`, {});
  }
}