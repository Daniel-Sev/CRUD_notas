import { CaminhoComponent } from './../caminho/caminho.component';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-linguagens',
  imports: [NavbarComponent, SidebarComponent, CaminhoComponent],
  templateUrl: './linguagens.component.html',
  styleUrl: './linguagens.component.css'
})
export class LinguagensComponent {

}
