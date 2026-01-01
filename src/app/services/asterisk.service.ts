// services/asterisk.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { RamalModel } from '../models/ramal.model';
import { of } from 'rxjs';
import { RAMAIS_MOCK } from '../mocks/ramal.mock';

@Injectable({
  providedIn: 'root'
})
export class AsteriskService {
  constructor(private http: HttpClient) { }

  getAllRamais(): Observable<RamalModel[]> {
    const url = environment.apiAsteriskUrl; // ou a URL correta

    // Uso de dados mockados se a configuração permitir
    if (environment.useMock) {
      return of(RAMAIS_MOCK);
    }

    return this.http.get<RamalModel[]>(url).pipe(
      tap((response) => {
        console.log('Ramais recebidos:');
        console.table(response);
      })
    );
  }

  getRamalByNumero(ramal: string): Observable<RamalModel> {
    const url = `${environment.apiAsteriskUrl}/${ramal}`;
    return this.http.get<RamalModel>(url);
  }
}
