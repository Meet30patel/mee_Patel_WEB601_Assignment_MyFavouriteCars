import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contextDB';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }

  constructor(private http: HttpClient , private MessageService: MessageService) { }

  getCars(): Observable<Content[]>
  {
    this.MessageService.add("Content array loaded!");
    return this.http.get<Content[]>("/api/cars");
  }

  addCar(newCar: Content): Observable<Content>{
    this.MessageService.add(`New Car added`);
    return this.http.post<Content>("/api/cars", newCar, this.httpOptions);
  }

  getCarById(id: number): Observable<any> {
    const cars = contents.find(content => content.id === id);

    if (cars) {
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(cars);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }

}