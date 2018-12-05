import { Component, OnInit, Input } from '@angular/core';
//import { name } from '.. nj/app.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

@Input() name:number;

  ngOnInit() {
  }

}
