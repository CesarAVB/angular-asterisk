import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProtocoloService } from '../../services/protocolo.service';
import { ProtocoloModel } from '../../models/protoloco.model';

@Component({
  selector: 'app-consultar-protocolos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultar-protocolos.html',
  styleUrl: './consultar-protocolos.css',
})
export class ConsultarProtocolos implements OnInit, OnDestroy {
  protocolos: ProtocoloModel[] = [];
  loading: boolean = false;
  error: string | null = null;

  // Propriedades para o modal de exclusão
  showDeleteModal: boolean = false;
  protocoloParaExcluir: ProtocoloModel | null = null;
  deletando: boolean = false;

  // ========== PROPRIEDADES PARA CONTROLE DE ÁUDIO ==========
  audioUrlMap: { [key: number]: string } = {};
  audioLoadingMap: { [key: number]: boolean } = {};
  audioErrorMap: { [key: number]: boolean } = {};
  audioPlayingMap: { [key: number]: boolean } = {};
  audioTimeMap: { [key: number]: string } = {};
  private currentPlayingId: number | null = null;

  // CONSTRUTOR COM INJEÇÃO DE DEPENDÊNCIAS
  constructor(
    private protocoloService: ProtocoloService,
    private http: HttpClient
  ) {}

  // CHAMA O MÉTODO DE CARREGAMENTO AO INICIAR O COMPONENTE
  ngOnInit() {
    this.carregarProtocolos();
  }

  // LIMPA AS URLs DE ÁUDIO AO DESTRUIR O COMPONENTE
  ngOnDestroy() {
    Object.values(this.audioUrlMap).forEach(url => {
      URL.revokeObjectURL(url);
    });
  }

  // MÉTODO PARA CARREGAR OS PROTOCOLOS USANDO O SERVIÇO
  carregarProtocolos() {
    this.error = null;
    this.protocoloService.getAllProtocolos().subscribe({
      next: (data) => {
        this.protocolos = data;
        console.log('Protocolos obtidos:', data);
      },
      error: (erro) => {
        this.error = 'Erro ao carregar protocolos';
        console.error('Ocorreu um erro:', erro);
      },
    });
  }

  // ========== MÉTODOS DE ÁUDIO ==========

  /**
   * Carrega o arquivo de áudio do protocolo
   */
  carregarAudio(protocolo: ProtocoloModel) {
    const id = protocolo.id;
    this.audioLoadingMap[id] = true;
    this.audioErrorMap[id] = false;

    // Chama o endpoint do backend para buscar a gravação
    this.http.get(`/api/gravacoes/${protocolo.protocolo}/stream`, {
      responseType: 'blob',
      observe: 'response'
    }).subscribe({
      next: (response) => {
        if (response.body) {
          // Cria uma URL temporária para o blob de áudio
          const url = URL.createObjectURL(response.body);
          this.audioUrlMap[id] = url;
          console.log(`Áudio carregado para protocolo ${protocolo.protocolo}`);
        }
        this.audioLoadingMap[id] = false;
      },
      error: (err) => {
        console.error('Erro ao carregar áudio:', err);
        this.audioErrorMap[id] = true;
        this.audioLoadingMap[id] = false;
      }
    });
  }

  /**
   * Alterna entre play e pause do áudio
   */
  toggleAudio(id: number) {
    const audioElement = document.getElementById(`audio-${id}`) as HTMLAudioElement;

    if (!audioElement) {
      console.error(`Elemento de áudio não encontrado para ID ${id}`);
      return;
    }

    // Pausa qualquer outro áudio que esteja tocando
    if (this.currentPlayingId !== null && this.currentPlayingId !== id) {
      const otherAudio = document.getElementById(`audio-${this.currentPlayingId}`) as HTMLAudioElement;
      if (otherAudio) {
        otherAudio.pause();
        otherAudio.currentTime = 0; // Reseta o tempo
      }
    }

    // Alterna play/pause
    if (audioElement.paused) {
      audioElement.play().catch(err => {
        console.error('Erro ao reproduzir áudio:', err);
      });
      this.currentPlayingId = id;
    } else {
      audioElement.pause();
    }
  }

  /**
   * Evento disparado quando o áudio começa a tocar
   */
  onAudioPlay(id: number) {
    this.audioPlayingMap[id] = true;
  }

  /**
   * Evento disparado quando o áudio é pausado
   */
  onAudioPause(id: number) {
    this.audioPlayingMap[id] = false;
  }

  /**
   * Evento disparado quando o áudio termina
   */
  onAudioEnded(id: number) {
    this.audioPlayingMap[id] = false;
    this.currentPlayingId = null;

    // Reseta o tempo exibido
    const audioElement = document.getElementById(`audio-${id}`) as HTMLAudioElement;
    if (audioElement) {
      audioElement.currentTime = 0;
    }
    this.audioTimeMap[id] = '0:00';
  }

  /**
   * Atualiza o tempo de reprodução exibido
   */
  onTimeUpdate(event: Event, id: number) {
    const audioElement = event.target as HTMLAudioElement;
    const currentTime = audioElement.currentTime;
    const duration = audioElement.duration;

    // Formata o tempo atual
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    const currentFormatted = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Formata a duração total
    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);
    const durationFormatted = `${totalMinutes}:${totalSeconds.toString().padStart(2, '0')}`;

    this.audioTimeMap[id] = `${currentFormatted} / ${durationFormatted}`;
  }

  // ========== FUNÇÕES DE FORMATAÇÃO ==========

  formatarTelefone(telefone: string): string {
    const tel = telefone.replace(/\D/g, '');
    if (tel.length === 11) {
      return `(${tel.substring(0, 2)}) ${tel.substring(2, 7)}-${tel.substring(7)}`;
    } else if (tel.length === 10) {
      return `(${tel.substring(0, 2)}) ${tel.substring(2, 6)}-${tel.substring(6)}`;
    }
    return telefone;
  }

  formatarCpfCnpj(doc: string): string {
    if (doc === 'nao-encontrado') return 'Não encontrado';
    const cpfCnpj = doc.replace(/\D/g, '');
    if (cpfCnpj.length === 11) {
      return `${cpfCnpj.substring(0, 3)}.${cpfCnpj.substring(3, 6)}.${cpfCnpj.substring(6, 9)}-${cpfCnpj.substring(9)}`;
    } else if (cpfCnpj.length === 14) {
      return `${cpfCnpj.substring(0, 2)}.${cpfCnpj.substring(2, 5)}.${cpfCnpj.substring(5, 8)}/${cpfCnpj.substring(8, 12)}-${cpfCnpj.substring(12)}`;
    }
    return doc;
  }

  formatarData(dataGeracao: string): string {
    const date = new Date(dataGeracao);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  formatarContexto(context: string): string {
    const contextos: { [key: string]: string } = {
      'custom-telefone': 'Telefone',
      'menu-cpf': 'CPF',
      'custom-suporte': 'Suporte',
      'custom-vendas': 'Vendas',
    };
    return contextos[context] || context;
  }

  getContextClass(context: string): string {
    if (context.includes('telefone')) return 'badge-phone';
    if (context.includes('cpf')) return 'badge-cpf';
    if (context.includes('suporte')) return 'badge-support';
    if (context.includes('vendas')) return 'badge-sales';
    return 'badge-default';
  }

  visualizarProtocolo(id: number) {
    console.log('Visualizar protocolo:', id);
    // Implementar navegação ou modal
  }

  // ========== MÉTODOS DE EXCLUSÃO ==========

  abrirModalExclusao(protocolo: ProtocoloModel) {
    this.protocoloParaExcluir = protocolo;
    this.showDeleteModal = true;
  }

  cancelarExclusao() {
    this.showDeleteModal = false;
    this.protocoloParaExcluir = null;
    this.deletando = false;
  }

  confirmarExclusao() {
    if (!this.protocoloParaExcluir) return;

    this.deletando = true;
    const id = this.protocoloParaExcluir.id;

    this.protocoloService.deletarProtocolo(id).subscribe({
      next: () => {
        console.log('Protocolo excluído com sucesso!');

        // Remove o protocolo da lista localmente
        this.protocolos = this.protocolos.filter((p) => p.id !== id);

        // Limpa o áudio se existir
        if (this.audioUrlMap[id]) {
          URL.revokeObjectURL(this.audioUrlMap[id]);
          delete this.audioUrlMap[id];
          delete this.audioLoadingMap[id];
          delete this.audioErrorMap[id];
          delete this.audioPlayingMap[id];
          delete this.audioTimeMap[id];
        }

        // Fecha o modal
        this.cancelarExclusao();
      },
      error: (erro) => {
        console.error('Erro ao excluir protocolo:', erro);
        this.error = 'Erro ao excluir protocolo. Tente novamente.';
        this.deletando = false;
      },
    });
  }
}
