import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CaminhoComponent } from '../caminho/caminho.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, SidebarComponent, CaminhoComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
