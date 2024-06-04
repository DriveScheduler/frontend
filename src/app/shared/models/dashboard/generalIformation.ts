import {Lesson} from "src/app/shared/models/dashboard/lesson";
import {User} from "src/app/shared/models/user";
import {Vehicle} from "src/app/shared/models/vehicle";

export interface GeneralInformation {
  favoriteUser: User;
  favoriteUserTimeSpent: number;
  favoriteVehicle: Vehicle;
  favoriteVehicleTimeSpent: number;
  lastLesson: Lesson;
  nextLesson: Lesson | null;
  timeSpentThisWeek: number;
}
