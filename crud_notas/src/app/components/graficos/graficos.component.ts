import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CaminhoComponent } from '../caminho/caminho.component';

@Component({
  selector: 'app-graficos',
  imports: [NavbarComponent, SidebarComponent, CaminhoComponent],
  templateUrl: './graficos.component.html',
  styleUrl: './graficos.component.css'
})
export class GraficosComponent {

}
