import { Component, Input } from '@angular/core';

import {NotificationsService} from './notifications/notifications.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello {{name}}</h1>
  <grocery-list-details></grocery-list-details>
  `,
  providers: [NotificationsService]
})
export class AppComponent  { 
  name = 'user'; 
  constructor(private notificationService: NotificationsService){}
}
