import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CaminhoComponent } from '../caminho/caminho.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro-aluno',
  imports: [NavbarComponent, SidebarComponent, CaminhoComponent, RouterModule],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.css',
  standalone: true

})
export class CadastroAlunoComponent {

}
