import { ProtocoloModel } from '../models/protoloco.model';

export const PROTOCOLOS_MOCK: ProtocoloModel[] = [
  {
    id: 1,
    protocolo: 20250001,
    telefone: '11999999999',
    nome: 'João Silva',
    cpfCnpj: '12345678900',
    context: 'Suporte',
    dataGeracao: '2025-01-01',
    timestamp: Date.now(),
  },
  {
    id: 2,
    protocolo: 20250002,
    telefone: '11988888888',
    nome: 'Maria Souza',
    cpfCnpj: '98765432100',
    context: 'Cobrança',
    dataGeracao: '2025-01-02',
    timestamp: Date.now(),
  },
];
