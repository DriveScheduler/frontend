export interface Vehicle {
  id: number;
  name: string;
  registrationNumber: string;
  type : {
    value: number;
    label: string;
  }
}
