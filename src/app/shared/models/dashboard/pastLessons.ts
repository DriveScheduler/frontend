import {Lesson} from "src/app/shared/models/dashboard/lesson";

export interface PastLessons {
  lessonTotalTime: number;
  lessons: Lesson[];
}
