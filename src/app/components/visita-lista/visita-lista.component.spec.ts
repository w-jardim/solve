import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visita-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visita-lista.component.html',
  styleUrls: ['./visita-lista.component.scss']
})
export class VisitaListaComponent {
  visitas = [
    {
      id: 1,
      data: new Date('2025-06-25T09:00:00'),
      status: 'PENDENTE',
      observacoes: 'Instalação de ar-condicionado split',
      profissional: 'Maria Técnica',
      cliente: 'João da Silva'
    },
    {
      id: 2,
      data: new Date('2025-06-26T14:30:00'),
      status: 'CONCLUÍDA',
      observacoes: 'Reparo elétrico',
      profissional: 'Carlos Eletricista',
      cliente: 'Ana Souza'
    }
  ];
}
