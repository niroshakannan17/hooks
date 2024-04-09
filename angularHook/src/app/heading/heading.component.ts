import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';

import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent implements OnChanges{
    
    @Input('headingTitle')  actuval_text = '';

    ngOnChanges(changes: SimpleChanges): void {
      
      if(!changes['actuval_text'].firstChange){
        console.log(changes['actuval_text'].firstChange);
        console.log('ngOnchange hook is calles');
      }
      
    }
}
