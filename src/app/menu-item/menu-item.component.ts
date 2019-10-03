import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NavItem} from '../navigation/nav-item';
import { MatMenu } from '@angular/material';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() public items: NavItem[];
  @ViewChild('childMenu', {static: true}) public childMenu: any;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }
}
