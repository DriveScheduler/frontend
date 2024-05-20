import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private http:HttpClient) {}

  public getLessons(){
    return this.http.get(environment.creneaux);
  }

  public addStudentToLesson(lessonId:number,studentId:number){
    return this.http.post(environment.addStudentToLesson,{lessonId:lessonId,studentId:studentId});
  }
}
