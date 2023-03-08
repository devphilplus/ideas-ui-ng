import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export enum MessageType {
  Info,
  Error
}

export class Message {

  constructor(
    private _text: string,
    private _type: MessageType
  ) {}

  get text(): string {
    return this._text;
  }

  get type(): MessageType {
    return this._type;
  }
}


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  _message = new BehaviorSubject<Message>(new Message('', MessageType.Info));

  constructor() { }

  send(
    text: string,
    type: MessageType
  ) {
    this._message.next(new Message(text, type));
  }

  get message$(): Observable<Message> {
    return this._message.asObservable();
  }
}
