import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CaminhoComponent } from '../caminho/caminho.component';

@Component({
  selector: 'app-login',
  imports: [NavbarComponent, SidebarComponent, CaminhoComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
