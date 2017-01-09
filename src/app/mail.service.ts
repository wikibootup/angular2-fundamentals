import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text: `You have got mail.`},
    {id: 1, text: `B`},
    {id: 2, text: `C`},
  ];

  update(id, text) { 
    this.messages = this.messages.map(
      m => m.id === id ? { id, text } : m
    )
  }

  constructor() { }

}
