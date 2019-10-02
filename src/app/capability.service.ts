import { Injectable } from '@angular/core';
import { NavItem } from './navigation/nav-item';

const cannedCapabilities: Map<string, NavItem[]> = new Map( [['IP', [
  {
    displayName: 'Action',
    disabled: false,
    iconName: 'work',
    children: [
      {
        displayName: 'Report',
        disabled: false,
        iconName: 'description'
      },
      {
        displayName: 'Flag',
        disabled: false,
        iconName: 'flag'
      }
    ]
  },
  {
    displayName: 'Enrich',
    disabled: false,
    iconName: 'attach_money'
  }
]]]);

@Injectable({
  providedIn: 'root'
})
export class CapabilityService {

  constructor() { }

  public lookupCapabilities(type: string): NavItem[] {
    return cannedCapabilities.get(type) || [];
  }
}
