import { Component, OnInit, Input } from '@angular/core';
import { NavItem } from './nav-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input()
  public value: string;

  @Input()
  public type: string;

  public items: NavItem[] = [
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
  ];

  constructor() { }

  ngOnInit() {
  }

}
