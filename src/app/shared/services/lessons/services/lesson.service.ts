import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http:HttpClient) {}

  public getLessons(userId:string, startDate:Date, endDate:Date, onlyEmpty:boolean) : Observable<any[]>{
    return this.http.get<any[]>(`${environment.api}/Lesson/Lessons`,{params:{userId:userId,startDate:startDate.toISOString(),endDate:endDate.toISOString(),onlyEmptyLesson:onlyEmpty}});
  }

  public addStudentToLesson(lessonId:number,studentId:string){
    return this.http.put(`${environment.api}/Lesson/AddStudentToLesson`,{lessonId:lessonId,studentId:studentId});
  }

  public addStudentToWaitingList(lessonId:number,studentId:string){
    return this.http.put(`${environment.api}/Lesson/AddStudentToWaitingList}`,{lessonId:lessonId,studentId:studentId});
  }

  public removeStudentFromLesson(lessonId:number,studentId:string){
    return this.http.put(`${environment.api}/removeStudentFromLesson`,{lessonId:lessonId,studentId:studentId});
  }
}
