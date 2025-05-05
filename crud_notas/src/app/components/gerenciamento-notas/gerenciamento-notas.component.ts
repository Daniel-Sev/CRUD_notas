import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { retry } from 'rxjs';
import { CaminhoComponent } from '../caminho/caminho.component';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-gerenciamento-notas',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, CaminhoComponent, FormsModule],
  templateUrl: './gerenciamento-notas.component.html',
  styleUrls: ['./gerenciamento-notas.component.css']
})

export class GerenciamentoNotasComponent {
  
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
    }
  ];
  itens_listados: any[] = [];
  total_pagina: any[] = []

  constructor() {
    this.atualizarItensListados();
    this.total_pagina = this.calcularPaginas()
  }
  
  calcularPaginas(){
    let total_pagina: any[] = []
    for (let index = 0; index < Math.ceil(this.itens.length/this.itens_pagina); index++) {
     total_pagina.push(index+1)
    }
    return total_pagina
  }
  
 

  atualizarItensListados() {
    const indice_inicio = (this.pagina_atual - 1) * this.itens_pagina;
    const indice_fim = indice_inicio + this.itens_pagina;
    this.itens_listados = this.itens.slice(indice_inicio, indice_fim);
  }

  paginaAnterior() {
    if (this.pagina_atual > 1) {
      this.pagina_atual-=1;
      this.atualizarItensListados();
    }else{
      this.navegarPara(this.total_pagina.length)
    }
  }

  proximaPagina() {
    if ((this.pagina_atual * this.itens_pagina) < this.itens.length) {
      this.pagina_atual++;
      this.atualizarItensListados();
    }else{
      this.navegarPara(1)
    }
  }
  navegarPara(pagina: number){
    this.pagina_atual = pagina
    console.log("Deu certo")
    this.atualizarItensListados()
  }
  nome_entrada :string = ""
  pesquisar(){
    
    for(let i of this.itens){
      if(this.nome_entrada == i.nome.toString()){
          console.log("Deu certo!")
          this.itens_listados = [
            i
          ]
          break;
      }
    }
  }

}
