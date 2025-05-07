import { CaminhoComponent } from './../caminho/caminho.component';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-linguagens',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, CaminhoComponent],
  templateUrl: './linguagens.component.html',
  styleUrl: './linguagens.component.css'
})
export class LinguagensComponent {
  constructor(
    private router: Router,
    public toastService: ToastService
  ) {}

  atualizarNotas () {
    const sucesso = true;
    console.log('Botão funcionando')
  
    if (sucesso) {
      this.toastService.exitToast('Aluno cadastrado!')
      this.router.navigate(['gerenciamento']) 
    } else {
      this.toastService.exitToast('Ops! Não foi possível concluir o  cadastro. Tente novamente')
      this.router.navigate(['gerenciamento']) 
    }
  }
}
