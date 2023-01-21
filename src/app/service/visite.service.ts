import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visite } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  constructor(private httpClient: HttpClient) { }
  addVisite(v : Visite): Observable<any> {
    return this.httpClient.post<Visite>('http://localhost:8080/SpringMVC/Visite/Add-Visite',v);
  }

  getVisite(): Observable<Visite[]> {
    return this.httpClient.get<Visite[]>('http://localhost:8080/SpringMVC/Visite/retrieve-visite');
  }
  removeVisite(idViste : number): Observable<any> {
    return this.httpClient.delete<Visite>(`http://localhost:8080/SpringMVC/Visite/removeVisite/${idViste}`);
  }
}