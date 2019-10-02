import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mat-nav-spike';

  appType = 'IP';
  appValue = '41.2.3.4'
}
