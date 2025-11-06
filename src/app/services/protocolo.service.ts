import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa o HttpClient para fazer requisições HTTP
import { environment } from './../../environments/environment'; // Importa o ambiente para obter a URL da API
import { Observable } from 'rxjs';
import { ProtocoloModel } from '../models/protoloco.model';

@Injectable({
  providedIn: 'root',
})
export class ProtocoloService {
  // INJEÇÃO DE DEPENDÊNCIAS NO CONSTRUTOR
  constructor(private http: HttpClient) {}

  // MÉTODO PARA SALVAR UM NOVO PROTOCOLO
  salvar(protocolo: ProtocoloModel): Observable<ProtocoloModel> {
    const url = environment.protocoloApi;
    return this.http.post<ProtocoloModel>(url, protocolo);
  }

  // MÉTODO PARA OBTER TODOS OS PROTOCOLOS
  getAllProtocolos(): Observable<ProtocoloModel[]> {
    const url = environment.protocoloApi;
    return this.http.get<ProtocoloModel[]>(url);
  }

  // MÉTODO PARA DELETAR UM PROTOCOLO PELO ID
  deletarProtocolo(id: number): Observable<void> {
    const url = `${environment.protocoloApi}/${id}`;
    return this.http.delete<void>(url);
  }
}
