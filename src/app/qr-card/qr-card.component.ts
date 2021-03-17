import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qr-card',
  templateUrl: './qr-card.component.html',
  styleUrls: ['./qr-card.component.css']
})
export class QrCardComponent implements OnInit {


   @Input() qr: any;


  constructor() { }

  ngOnInit(): void {
  }

}
