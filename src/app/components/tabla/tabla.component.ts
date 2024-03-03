import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PlacesService } from '../../servicies/places.service';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import Place from '../../interface/place';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PlacesService[] = [];

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule,RouterLink, RouterOutlet,MatButtonModule],
  
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit{
  places:Place[] | undefined


  

  constructor( private placeService:PlacesService){
    

  }
  ngOnInit(): void {
 
  }
  

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [...ELEMENT_DATA];
  clickedRows = new Set<PeriodicElement>();
 
  @ViewChild(MatTable) table!: MatTable<PeriodicElement> ;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
 

  /** The label for the checkbox on the passed row */



}
