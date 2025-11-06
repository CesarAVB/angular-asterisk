// pages/consultar-ramais/consultar-ramais.component.ts
import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsteriskService } from '../../services/asterisk.service'; // ✅ CORRIGIDO
import { RamalModel } from '../../models/ramal.model';

@Component({
  selector: 'app-consultar-ramais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultar-ramais.html',
  styleUrls: ['./consultar-ramais.css']
})
export class ConsultarRamais implements OnInit {
  ramais = signal<RamalModel[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  filtroStatus = signal<string>('todos');

  // Computed signals
  ramaisFiltrados = computed(() => {
    const filtro = this.filtroStatus();
    const todosRamais = this.ramais();

    if (filtro === 'todos') return todosRamais;
    if (filtro === 'online') return todosRamais.filter(r => r.status === 'Avail');
    if (filtro === 'offline') return todosRamais.filter(r => r.status === 'Offline');
    if (filtro === 'busy') return todosRamais.filter(r => r.status === 'Busy');

    return todosRamais;
  });

  totalRamais = computed(() => this.ramais().length);
  ramaisOnline = computed(() => this.ramais().filter(r => r.status === 'Avail').length);
  ramaisOffline = computed(() => this.ramais().filter(r => r.status === 'Offline').length);
  ramaisBusy = computed(() => this.ramais().filter(r => r.status === 'Busy').length);

  constructor(private asteriskService: AsteriskService) { } // ✅ CORRIGIDO

  ngOnInit() {
    this.carregarRamais();
  }

  carregarRamais() {
    this.loading.set(true);
    this.error.set(null);

    this.asteriskService.getAllRamais().subscribe({ // ✅ CORRIGIDO
      next: (data) => {
        this.ramais.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Erro ao carregar ramais');
        this.loading.set(false);
        console.error('Erro:', err);
      }
    });
  }

  filtrarPorStatus(status: string) {
    this.filtroStatus.set(status);
  }

  getStatusClass(status: string): string {
    if (status === 'Avail') return 'status-online';
    if (status === 'Offline') return 'status-offline';
    if (status === 'Busy') return 'status-busy';
    return 'status-unknown';
  }

  getStatusText(status: string): string {
    if (status === 'Avail') return 'Disponível';
    if (status === 'Offline') return 'Offline';
    if (status === 'Busy') return 'Ocupado';
    return 'Desconhecido';
  }

  getStatusIcon(status: string): string {
    if (status === 'Avail') return '✓';
    if (status === 'Offline') return '✕';
    if (status === 'Busy') return '⊘';
    return '?';
  }

  ligarParaRamal(ramal: string) {
    console.log('Ligar para ramal:', ramal);
    alert(`Iniciando chamada para o ramal ${ramal}...`);
    // Implementar lógica de chamada via API
  }
}
