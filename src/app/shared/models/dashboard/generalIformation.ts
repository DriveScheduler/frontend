import {Lesson} from "src/app/shared/models/dashboard/lesson";

export interface GeneralInformation {
  favoriteTeacher: string;
  favoriteTeacherTimeSpent: number;
  favoriteVehicle: string;
  favoriteVehicleTimeSpent: number;
  lastLesson: Lesson;
  nextLesson: Lesson;
  timeSpentThisWeek: number;
}
