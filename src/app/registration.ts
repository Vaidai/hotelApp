import { Guest } from './guest';

export interface Registration {
  id: number;
  guest: Guest;
  roomId: number;
  active: boolean;
}
