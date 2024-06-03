import {Lesson} from "src/app/shared/models/dashboard/lesson";
import {User} from "src/app/shared/models/user";

export interface GeneralInformation {
  favoriteTeacher: User;
  favoriteTeacherTimeSpent: number;
  favoriteVehicle: string;
  favoriteVehicleTimeSpent: number;
  lastLesson: Lesson;
  nextLesson: Lesson | null;
  timeSpentThisWeek: number;
}
