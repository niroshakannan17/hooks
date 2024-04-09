import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';

import { OnChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import { DoCheck } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent implements OnChanges, OnInit, DoCheck{
    
    @Input('headingTitle')  actuval_text:string[] = [];

    ngOnChanges(changes: SimpleChanges): void {
      
      //if(!changes['actuval_text'].firstChange){
        //console.log(changes['actuval_text'].currentValue);
        //console.log('ngOnchange hook is calles');
      //}
      console.log('ngOnchange hook is calles');
    }

    ngOnInit(): void {
      console.log('ngOnInit hook is calles');
      this.actuval_text.push("first comment");
    }

    ngDoCheck(): void {
      console.log('ngDoCheck hook is calles');
    }
}
