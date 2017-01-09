import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <app-simple-form></app-simple-form>
    {{ mail.message }}

    {{ api }}
  </div>`
})
export class AppComponent {
  title = 'app works!';
  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api,
    ) {}  
}
