import { Component, OnInit } from '@angular/core';
import { InfopaginaService } from '../../services/infopagina.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public _infoService: InfopaginaService,
                public _productoService: ProductosService) { }

  ngOnInit(): void {
  }

}
