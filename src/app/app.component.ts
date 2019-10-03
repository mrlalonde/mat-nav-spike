import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mat-nav-spike';

  appValueControl = new FormControl();
  appTypeControl = new FormControl();

  get appValue(): string {
    return this.appValueControl.value;
  }

  set appValue(value) {
    this.appValueControl.setValue(value);
  }

  get appType(): string {
    return this.appTypeControl.value;
  }

  set appType(value: string) {
    this.appTypeControl.setValue(value);
  }
}
