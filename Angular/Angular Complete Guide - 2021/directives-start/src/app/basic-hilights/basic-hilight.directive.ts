import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBasicHilight]'

})
export class BasicHilightDirective implements OnInit{

  constructor(private elementRef: ElementRef){
  }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}