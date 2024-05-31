import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Licence} from "../../models/licence";
import {Observable} from "rxjs";
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LicenceService {

  constructor(private http:HttpClient) {}

  getLicences() : Observable<Licence[]> {
    return  this.http.get<Licence[]>(`${environment.api}/Licence`)
  }
}
