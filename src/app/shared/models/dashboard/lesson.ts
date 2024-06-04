import {User} from "src/app/shared/models/user";

export interface Lesson {
  date: string;
  duration: string;
  endTime: string;
  id: number;
  startTime: string;
  teacher: string;
  student: User  | null;
  time: string;
  title: string;
  vehicle: string;
}
