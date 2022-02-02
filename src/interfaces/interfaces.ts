export interface Device {
  type: string;
  id: string;
  name: string;
  connectionState: string;
}

export interface Bulb extends Device {
  isTurnedOn: boolean;
  brightness: number;
  color: string;
}
export interface Outlet extends Device {
  powerConsumption: number;
  isTurnedOn: boolean;
}
export interface TemperatureSensor extends Device {
  temperature: number;
}
export type allTypeDevices = Bulb | Outlet | TemperatureSensor;

export type ModalInfo = {
  isOpen: boolean;
  id: string | null;
  isMobile: boolean;
};
