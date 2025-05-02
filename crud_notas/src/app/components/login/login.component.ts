import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CaminhoComponent } from '../caminho/caminho.component';
import { PopUpLoginComponent } from '../pop-up-login/pop-up-login.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, CaminhoComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public dialog: MatDialog) {}


cadastroValido: boolean = false;

errorDialog (): void{
  const dialogRef = this.dialog.open(PopUpLoginComponent, {
    width: '600px',
    height: '430px',
  })
}

registrado(): void {
  if (!this.cadastroValido) {
    this.errorDialog();
  }
}

}
