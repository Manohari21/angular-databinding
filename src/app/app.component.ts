import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'first-app';
  firstname= "Manohari";
  lastname= "Vellaisamy";
  name:string="hello";

  isDisabled= true;
  status:string ="error";

  color: string='aqua';

  clickCount=0;
  clickMe(){
    this.clickCount++;
  }
  
  getColor(){
    return 'green';
  }
 
}
