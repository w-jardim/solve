import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Visita {
  id: number;
  data: string;
  status: string;
  observacoes: string;
  profissional: string;
  cliente: string;
}

@Injectable({
  providedIn: 'root'
})
export class VisitaService {
  private apiUrl = 'http://localhost:3000/api/visitas'; // URL do seu backend

  constructor(private http: HttpClient) {}

  getVisitas(): Observable<Visita[]> {
    return this.http.get<Visita[]>(this.apiUrl);
  }
}
