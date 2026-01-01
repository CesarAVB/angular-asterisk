import { RamalModel } from '../models/ramal.model';

export const RAMAIS_MOCK: RamalModel[] = [
  {
    ramal: '1001',
    ip: '192.168.0.10',
    porta: '5060',
    status: 'Avail',
  },
  {
    ramal: '1002',
    ip: '192.168.0.11',
    porta: '5060',
    status: 'Busy',
  },
  {
    ramal: '1003',
    ip: null,
    porta: null,
    status: 'Offline',
  },
];
