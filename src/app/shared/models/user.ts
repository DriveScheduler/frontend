export interface LicenceType {
  value: number;
  label: string;
}

export interface UserType {
  value: number;
  label: string;
}

export interface User {
  id: string;
  name: string;
  firstName: string;
  email: string;
  licenceType: LicenceType;
  userType: UserType;
}
