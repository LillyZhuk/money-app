import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvent } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private http: HttpClient
  ) { }

  // addEvent(event: AppEvent): Observable<AppEvent> {
  //   return this.post('events', event);
  // }

  public getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('events');
  }

  public getEventById(id: string): Observable<IEvent> {
    return this.http.get<IEvent>(`events/${id}`);
  }
}
