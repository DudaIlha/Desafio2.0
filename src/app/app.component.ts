import { Component } from '@angular/core';
import { FormularioComponent } from "./components/formulario/formulario.component";

@Component({
  selector: 'app-root',
  imports: [FormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyApp';
}
