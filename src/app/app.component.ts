import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {ContactoComponent} from './contacto/contacto.component';
import {ServiciosComponent} from './servicios/servicios.component';
import {MisionVisionComponent} from './mision-vision/mision-vision.component';
import {QuienesSomosComponent} from './quienes-somos/quienes-somos.component';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ContactoComponent, ServiciosComponent, MisionVisionComponent, QuienesSomosComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ConfiaPePage';
}
