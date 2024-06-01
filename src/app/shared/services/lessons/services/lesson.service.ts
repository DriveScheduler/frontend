import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Lesson } from '../../../models/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http:HttpClient) {}

  public getLessons(startDate:Date, endDate:Date, onlyEmpty:boolean, teachers: string[]) : Observable<Lesson[]>{
    let params = new HttpParams()
    .set('startDate', startDate.toISOString())
    .set('endDate', endDate.toISOString())
    .set('onlyEmptyLesson', onlyEmpty.toString());

    teachers.forEach(teacherId => {
      params = params.append('teachers', teacherId);
    });
    return this.http.get<any[]>(`${environment.api}/Lesson/Lessons`,{params:params});
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

  public createLesson(lessonData:any){
    return this.http.post(`${environment.api}/Lesson/Create`,lessonData);
  }

  public deleteLesson(lessonId: number) {
    return this.http.delete(`${environment.api}/Lesson/Delete`, { params: { lessonId: lessonId.toString() } });
  }
}
