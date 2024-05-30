import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../../../environment/environment';
import { Observable } from 'rxjs';
import { Lesson } from '../../../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http:HttpClient) {}

  public getLessons(startDate:Date, endDate:Date, onlyEmpty:boolean) : Observable<Lesson[]>{
    return this.http.get<any[]>(`${environment.api}/Lesson/Lessons`,{params:{startDate:startDate.toISOString(),endDate:endDate.toISOString(),onlyEmptyLesson:onlyEmpty}});
  }

  public addStudentToLesson(lessonId:number){
    return this.http.put(`${environment.api}/Lesson/AddStudentToLesson`,{lessonId:lessonId});
  }

  public addStudentToWaitingList(lessonId:number){
    return this.http.put(`${environment.api}/Lesson/AddStudentToWaitingList`,{lessonId:lessonId});
  }

  public removeStudentFromLesson(lessonId:number){
    return this.http.put(`${environment.api}/Lesson/RemoveStudentFromLesson`,{lessonId:lessonId});
  }

  public removeStudentFromWaitingList(lessonId:number){
    return this.http.put(`${environment.api}/Lesson/RemoveStudentFromWaitingList`,{lessonId:lessonId});
  }
}
