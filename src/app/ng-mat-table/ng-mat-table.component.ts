import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'}
];

@Component({
  selector: 'app-ng-mat-table',
  templateUrl: './ng-mat-table.component.html',
  styleUrls: ['./ng-mat-table.component.css']
})
export class NgMatTableComponent implements OnInit {
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
