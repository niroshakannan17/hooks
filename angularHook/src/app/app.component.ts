import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularHook';
  titles:string[]=[];
  disableHeading = false;
  addTitle(){
    this.titles.push(this.title);
    console.log(this.titles);
  }
}
