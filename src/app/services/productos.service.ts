import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];


  constructor(private http: HttpClient) {

    this.cargarProductos();

  }


  private cargarProductos() {

    this.http.get('https://angular-html-e2cb9-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: any) => {

        this.productos = resp;
        this.cargando = false;

      });


  }


  getProducto(id: string) {

    return this.http.get('https://angular-html-25cf9.firebaseio.com/productos/${ id }.json');
  }

}
