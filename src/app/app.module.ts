import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import { IpComponent } from './ip/ip.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    IpComponent,
    NavigationComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    RouterModule.forRoot(
      []
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
