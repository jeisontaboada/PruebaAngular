import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'; 
import { PlacesService } from '../../servicies/places.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




@Component({
  selector: 'app-new-place',
  standalone: true,
  imports: [ ReactiveFormsModule,MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule,MatNativeDateModule],
  templateUrl: './new-place.component.html',
  styleUrl: './new-place.component.css'
})
export class NewPlaceComponent implements OnInit {
  formulario: FormGroup;
  

  constructor(
    //llamanos a nuestro servicio
    private placesService: PlacesService
  ) {
    //con esto llamamos a nuestro formulario y campos de nuestro html
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      descripcion: new FormControl(),
      fechaVencimiento: new FormControl(),
      prioridades: new FormControl(),
      etiquetas: new FormControl()
    })
  }

  //para poder implementar el evento oninit
  ngOnInit(): void {
  

  }

   //hacemos otro metodo 
  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.placesService.addPlace(this.formulario.value);
    console.log(response);
  }

  
}

