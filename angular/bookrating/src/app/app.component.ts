import { Component } from '@angular/core';
//import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    //   name:string;
    name1:number=0;
    name2:number=0;
    name3:number=0;

   title = 'Book Rating App';
   test='yo .... broh !';
   //letUsC="letusc.jpg";
   people=['sravan','reddy','guduru'];

  //  clickMe(ele:string){
  //   this.name=ele;
  //   console.log(this.name,ele);
  //  }

  clickMeInc1(){
    if(this.name1<5)
    this.name1++;
  }

  clickMeDec1(){
    if(this.name1>0)
     this.name1--; 
  }

  clickMeInc2(){
    if(this.name2<5)
    this.name2++;
  }

  clickMeDec2(){
    if(this.name2>0)
     this.name2--; 
  }

  clickMeInc3(){
    if(this.name3<5)
    this.name3++;
  }

  clickMeDec3(){
    if(this.name3>0)
     this.name3--; 
  }
  // msg = "";
  // nCnt: number = 0;
  // clickMe() {
  //     this.nCnt = this.nCnt + 1;
  //     this.msg = "Clicked: " + this.nCnt;
  // }
}
