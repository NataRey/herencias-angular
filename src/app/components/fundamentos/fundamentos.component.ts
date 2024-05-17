import { Component } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-fundamentos',
  standalone: true,
  imports: [PadreComponent],
  templateUrl: './fundamentos.component.html',
  styleUrl: './fundamentos.component.css'
})
export class FundamentosComponent {
  nombreFramework: string = "Angular";
  nombreLenguaje: string = "JavaScript";
  anio: number = 2024;  
  carrito: string[] = ["teclado", "mouse", "pad"];
  estaLogueado: boolean = false;
  frameworks: any[] = [
    {
      id: 10,
      nombre: "angular"
    },
    {
      id: 20,
      nombre: "react"
    },
    {
      id: 30,
      nombre: "vue"
    },
    {
      id: 40,
      nombre: "svelte"
    }
  ];
  colorFondo: string = "cfVerde"

  /**
   * La función "manejarClick" registra un mensaje en la consola y muestra una alerta cuando ocurre un evento de clic.
   */
  manejarClick(){
    console.log("hizo click");
    alert("HIZO CLICK!")
  }
  /**
   * La función manejarMouseover inicia sesión "over" en la consola y establece la propiedad colorFondo en "cfRosado".
   */
  manejarMouseover(){
    console.log("over");
    this.colorFondo = "cfRosado";
  }
  /**
   * La función manejarMousedown inicia sesión "down" en la consola y establece la propiedad colorFondo en "cfRojo".
   */
  manejarMousedown(){
    console.log("down");
    this.colorFondo = "cfRojo";
  }
 /**
  * La función "manejarMouseup" inicia sesión en la consola y cambia el color de fondo a azul.
  */
  manejarMouseup(){
    console.log("up");
    this.colorFondo = "cfAzul";
  }
}
