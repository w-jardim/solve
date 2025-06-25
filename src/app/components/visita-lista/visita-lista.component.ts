import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-visita-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './visita-lista.component.html',
  styleUrls: ['./visita-lista.component.scss']
})
export class VisitaListaComponent {
  filtroTexto: string = '';

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

  visitasFiltradas = [...this.visitas];

  filtrarVisitas() {
    const filtro = this.filtroTexto.toLowerCase();
    this.visitasFiltradas = this.visitas.filter(visita => {
      return (
        visita.profissional.toLowerCase().includes(filtro) ||
        visita.cliente.toLowerCase().includes(filtro) ||
        visita.observacoes.toLowerCase().includes(filtro) ||
        visita.status.toLowerCase().includes(filtro) ||
        visita.data.toLocaleDateString('pt-BR').includes(filtro)
      );
    });
  }
  editar(visita: any) {
  alert(`Editar visita ID ${visita.id} (função ainda não implementada)`);
}

excluir(visita: any) {
  const confirmar = confirm(`Deseja excluir a visita ID ${visita.id}?`);
  if (confirmar) {
    this.visitas = this.visitas.filter(v => v.id !== visita.id);
    this.filtrarVisitas(); // Atualiza a lista
  }
}

}
