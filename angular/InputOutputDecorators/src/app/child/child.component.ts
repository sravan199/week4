import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() name:number;
  @Output() childEvent=new EventEmitter(); 
  ngOnInit() {
  }
     data:number=name;
     fireEvent(){
      this.childEvent.emit(this.data);
    }

}
