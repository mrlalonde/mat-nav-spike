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
]],
['Tag', [
  {
    displayName: 'Alert',
    disabled: false,
    iconName: 'add-alert'
  }
]]]);

@Injectable({
  providedIn: 'root'
})
export class CapabilityService {

  constructor() { }

  public lookupCapabilities(type: string): NavItem[] {
    console.log('looking up {}', type);
    console.log(cannedCapabilities);
    return cannedCapabilities.get(type) || [];
  }
}
