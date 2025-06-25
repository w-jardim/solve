import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-visita-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './visita-cadastro.component.html',
  styleUrls: ['./visita-cadastro.component.scss']
})
export class VisitaCadastroComponent {
  visita = {
    data: '',
    status: 'PENDENTE',
    observacoes: '',
    profissional: '',
    cliente: ''
  };

  salvar() {
    console.log('Salvando visita:', this.visita);
    alert('Visita salva! (ainda sem backend)');
    // Aqui você pode implementar salvar no backend, etc.
  }
}
