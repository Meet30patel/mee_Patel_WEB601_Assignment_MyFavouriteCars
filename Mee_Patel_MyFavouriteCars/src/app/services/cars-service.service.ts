import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contextDB';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  constructor(private MessageService: MessageService) { }

  getSongs(): Observable<Content[]>
  {
    const cars = contents;
    this.MessageService.add("Content array loaded!");
    return of(cars);
  }

  getSongById(id: number): Observable<any> {
    const cars = contents.find(content => content.id === id);

    if (cars) {
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(cars);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }

}