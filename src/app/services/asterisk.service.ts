// services/asterisk.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { RamalModel } from '../models/ramal.model';

@Injectable({
  providedIn: 'root'
})
export class AsteriskService {
  constructor(private http: HttpClient) { }

  getAllRamais(): Observable<RamalModel[]> {
    const url = environment.asteriskApi; // ou a URL correta

    return this.http.get<RamalModel[]>(url).pipe(
      tap((response) => {
        console.log('Ramais recebidos:');
        console.table(response);
      })
    );
  }

  getRamalByNumero(ramal: string): Observable<RamalModel> {
    const url = `${environment.asteriskApi}/${ramal}`;
    return this.http.get<RamalModel>(url);
  }
}
