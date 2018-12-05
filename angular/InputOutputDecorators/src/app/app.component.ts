import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping-App';
 buy:number=0;
//  mess:string="";
mess="total items bought are "; 
val =0;
 message(val:number){
 this.val= this.buy;
 
 }

  clickMeInc1(){
    this.buy++;
  }
  
}
