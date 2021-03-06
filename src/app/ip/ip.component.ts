import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent implements OnInit {

  @Input()
  public value: string;

  @Input()
  public type: string;
  constructor() { }

  ngOnInit() {
  }

}
