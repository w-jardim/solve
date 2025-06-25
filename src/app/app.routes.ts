import { Routes } from '@angular/router';
import { VisitaListaComponent } from './components/visita-lista/visita-lista.component';
import { VisitaCadastroComponent } from './components/visita-cadastro/visita-cadastro/visita-cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'visitas', pathMatch: 'full' },
  { path: 'visitas', component: VisitaListaComponent },
  { path: 'visitas/cadastro', component: VisitaCadastroComponent },
];
