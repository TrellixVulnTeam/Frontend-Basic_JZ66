import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bob',
  templateUrl: './bob.component.html',
  styleUrls: ['./bob.component.css']
})
export class BobComponent implements OnInit {
  
  aliceCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
