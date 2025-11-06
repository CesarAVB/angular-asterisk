// models/ramal.model.ts
export interface RamalModel {
  ramal: string;
  ip: string | null;
  porta: string | null;
  status: 'Avail' | 'Offline' | 'Busy';
}
