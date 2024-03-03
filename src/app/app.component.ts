import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewPlaceComponent } from './components/new-place/new-place.component';
import { TablaComponent } from './components/tabla/tabla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewPlaceComponent,TablaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-angular';
}
