import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    'You have got mail.',
    'B',
    'C'
  ];

  constructor() { }

}
