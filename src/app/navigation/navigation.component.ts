import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
