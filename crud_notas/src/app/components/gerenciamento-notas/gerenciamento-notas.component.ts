import { ToastService } from './../toast.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CaminhoComponent } from '../caminho/caminho.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PopUpLoginComponent } from '../pop-up-login/pop-up-login.component';
import { PopUpEscolhasComponent } from '../pop-up-escolhas/pop-up-escolhas.component';
import { Route } from '@angular/router';

@Component({
  selector: 'app-gerenciamento-notas',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    CaminhoComponent,
    FormsModule,
    RouterModule,
    MatDialogModule, 
  ],
  templateUrl: './gerenciamento-notas.component.html',
  styleUrls: ['./gerenciamento-notas.component.css']
})
export class GerenciamentoNotasComponent {

  editarValido: boolean = true;
  pagina_atual: number = 1;
  itens_pagina: number = 5;
  
  itens: any = [
    {
      nome: "Daniel",
      email: "daniel@gmail.com",
      ano: 2,
      serie: "G",
      exatas: 10,
      linguagens: 10,
      ciencias: 10,
      media: 10
    },
    {
      nome: "Mariana",
      email: "mariana@gmail.com",
      ano: 1,
      serie: "B",
      exatas: 9,
      linguagens: 8,
      ciencias: 9,
      media: 2  
      
    },
    {
      nome: "Lucas",
      email: "lucas@gmail.com",
      ano: 3,
      serie: "A",
      exatas: 7,
      linguagens: 6,
      ciencias: 8,
      media: 7
    },
    {
      nome: "Beatriz",
      email: "beatriz@gmail.com",
      ano: 2,
      serie: "D",
      exatas: 10,
      linguagens: 9,
      ciencias: 10,
      media: 9.7
    },
    {
      nome: "Felipe",
      email: "felipe@gmail.com",
      ano: 1,
      serie: "E",
      exatas: 6,
      linguagens: 7,
      ciencias: 5,
      media: 6
    },
    {
      nome: "Ana Clara",
      email: "ana.clara@gmail.com",
      ano: 3,
      serie: "C",
      exatas: 8,
      linguagens: 9,
      ciencias: 8,
      media: 8.3
    },
    {
      nome: "Pedro",
      email: "pedro@gmail.com",
      ano: 2,
      serie: "F",
      exatas: 7,
      linguagens: 7,
      ciencias: 6,
      media: 6.7
    },
    {
      nome: "Camila",
      email: "camila@gmail.com",
      ano: 1,
      serie: "A",
      exatas: 9,
      linguagens: 9,
      ciencias: 8,
      media: 8.7
    },
    {
      nome: "Rafael",
      email: "rafael@gmail.com",
      ano: 3,
      serie: "B",
      exatas: 5,
      linguagens: 6,
      ciencias: 7,
      media: 6
    },
    {
      nome: "Isabela",
      email: "isabela@gmail.com",
      ano: 2,
      serie: "E",
      exatas: 8,
      linguagens: 8,
      ciencias: 9,
      media: 8.3
    },
    {
      nome: "Gustavo",
      email: "gustavo@gmail.com",
      ano: 1,
      serie: "D",
      exatas: 6,
      linguagens: 5,
      ciencias: 7,
      media: 6
    },
    {
      nome: "Laura",
      email: "laura@gmail.com",
      ano: 3,
      serie: "C",
      exatas: 10,
      linguagens: 9,
      ciencias: 9,
      media: 9.3
    },
    {
      nome: "Thiago",
      email: "thiago@gmail.com",
      ano: 2,
      serie: "F",
      exatas: 7,
      linguagens: 8,
      ciencias: 7,
      media: 7.3
    },
    {
      nome: "Thiago",
      email: "thiago@gmail.com",
      ano: 2,
      serie: "F",
      exatas: 7,
      linguagens: 8,
      ciencias: 7,
      media: 7.3
    }
  ];

  itens_listados: any[] = [];
  total_pagina: any[] = [];
  nome_entrada: string = "";


  constructor(private dialog: MatDialog, public toastService: ToastService) { 
    this.atualizarItensListados();
    this.total_pagina = this.calcularPaginas();

  }

  errorDialog(): void {
    this.dialog.open(PopUpEscolhasComponent, {
      width: '129px',
      height: '190px',
    });
  }

  registrado(): void {
    if (this.editarValido) {
      this.errorDialog();
    }
  }

  calcularPaginas() {
    const total_paginas = Math.ceil(this.itens.length / this.itens_pagina);
    return Array.from({ length: total_paginas }, (_, i) => i + 1);
  }

  atualizarItensListados() {
    const inicio = (this.pagina_atual - 1) * this.itens_pagina;
    const fim = inicio + this.itens_pagina;
    this.itens_listados = this.itens.slice(inicio, fim);
  }

  paginaAnterior() {
    if (this.pagina_atual > 1) {
      this.pagina_atual--;
    } else {
      this.pagina_atual = this.total_pagina.length;
    }
    this.atualizarItensListados();
  }

  proximaPagina() {
    if ((this.pagina_atual * this.itens_pagina) < this.itens.length) {
      this.pagina_atual++;
    } else {
      this.pagina_atual = 1;
    }
    this.atualizarItensListados();
  }

  navegarPara(pagina: number) {
    this.pagina_atual = pagina;
    this.atualizarItensListados();
  }

  
  pesquisar(){
    this.itens_listados = []
    const regex = new RegExp(this.nome_entrada, 'i');
    if(this.nome_entrada == null){
      this.pagina_atual= 1;
    }
    for(let i of this.itens){
      const nomeItemSemEspacos = i.nome.replace(/\s+/g, '');
      if(regex.test(i.nome)){
          this.itens_listados.push(i)
      }
    }
  }
}
