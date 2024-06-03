import {Lesson} from "src/app/shared/models/dashboard/lesson";

export interface NextLessons {
  nextMonths: Lesson[];
  thisMonth: Lesson[];
  thisWeek: Lesson[];
  today: Lesson[];
  tomorrow: Lesson[];
  totalLessons: number;
  totalTime: number;
}
