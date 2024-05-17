import { Component } from '@angular/core';
//importar router link para poder enviar el link directo sin recargar la pagina
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

}
