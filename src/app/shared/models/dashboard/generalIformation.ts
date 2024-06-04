import {Lesson} from "src/app/shared/models/dashboard/lesson";
import {User} from "src/app/shared/models/user";
import {Vehicle} from "src/app/shared/models/vehicle";

export interface GeneralInformation {
  favoriteTeacher: User;
  favoriteTeacherTimeSpent: number;
  favoriteVehicle: Vehicle;
  favoriteVehicleTimeSpent: number;
  lastLesson: Lesson;
  nextLesson: Lesson | null;
  timeSpentThisWeek: number;
}
