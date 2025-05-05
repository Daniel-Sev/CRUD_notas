import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GraficosComponent } from './components/graficos/graficos.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { CadastroAlunoComponent } from './components/cadastro-aluno/cadastro-aluno.component';
import { LinguagensComponent } from './components/linguagens/linguagens.component';
import { GerenciamentoNotasComponent } from './components/gerenciamento-notas/gerenciamento-notas.component';


export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
        path:"graficos",
        component: GraficosComponent
    },
    {
        path:"cadastro",
        component: CadastroComponent
    },
    {
        path:"cadastro-aluno",
        component: CadastroAlunoComponent
    },
    {
        path:"gerenciamento",
        component: GerenciamentoNotasComponent
    },
    {
        path:"linguagens",
        component: LinguagensComponent
    }
];
