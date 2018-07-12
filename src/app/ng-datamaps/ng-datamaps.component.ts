import { Component, OnInit } from '@angular/core';

declare var Datamap: any;

@Component({
  selector: 'app-ng-datamaps',
  templateUrl: './ng-datamaps.component.html',
  styleUrls: ['./ng-datamaps.component.css']
})
export class NgDatamapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var map = new Datamap({ 
      element: document.getElementById('container'),
      fills: {
        defaultFill: "gray",
        authorHasTraveledTo: "#fa0fa0"
      },
      geographyConfig: {
        popupOnHover: true, //disable the popup while hovering
        highlightOnHover: true,
        highlightFillColor: '#efefef',
        highlightBorderColor: '#efefef'
    }
    });
  }

}
