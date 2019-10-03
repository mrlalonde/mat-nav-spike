import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from './nav-item';
import {CapabilityService} from '../capability.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input()
  public value: string;

  private _type: string;

  @Input()
  public set type(value: string) {
    console.log('Setting type ' + value + ' was ' + this._type);
    this.items = this.capabilityService.lookupCapabilities(value);


    this._type = value;
  }

  public get type() {
    return this._type;
  }

  public items: NavItem[];

  private capabilityService: CapabilityService;

  public hasNavigation(): boolean {
    return this.items && this.items.length > 0;
  }

  constructor(capabilityService: CapabilityService) {
    this.capabilityService = capabilityService;
   }

  ngOnInit() {
    this.items = this.capabilityService.lookupCapabilities(this.type);
  }

}
