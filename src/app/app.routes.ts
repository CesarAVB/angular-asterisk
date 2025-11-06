import { ConsultarRamais } from './pages/consultar-ramais/consultar-ramais';
import { Routes } from '@angular/router';
import { ConsultarProtocolos } from './pages/consultar-protocolos/consultar-protocolos';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/pages/dashboard'
  },
  {
    path: 'pages/dashboard',
    component: Dashboard
  },
  { path: 'pages/consultar-protocolos',
    component: ConsultarProtocolos
  },
  { path: 'pages/consultar-ramais',
    component: ConsultarRamais
  }
];
