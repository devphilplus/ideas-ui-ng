import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export enum MessageType {
  Info,
  Error
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message = new BehaviorSubject<{
    text: string,
    type: MessageType
  }>({
    text: '',
    type: MessageType.Info
  });

  constructor() { }

  send(
    text: string,
    type: MessageType
  ) {
    this.message.next({
      text: text,
      type: type
    });
  }
}
