import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertycard',
  templateUrl: './propertycard.component.html',
  styleUrls: ['./propertycard.component.css']
})
export class PropertycardComponent implements OnInit {

  property: any = {
    "id":1,
    "name":"New House",
    "type":"House",
    "price": 12000
  }

  constructor() { }

  ngOnInit(): void {
  }

}
