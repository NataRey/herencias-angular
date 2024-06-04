import { Component } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';
// del modulo de angular forms voy a importar 
import { FormsModule, ReactiveFormsModule, FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-fundamentos',
  standalone: true,
  //nunca olvidar activar mis importaciones  en el caso de FormGroup,FormControl no es necesario activarlas por que el ReactiveFormsModule me trae por debajo estas otras dos 
  imports: [PadreComponent,FormsModule,ReactiveFormsModule ],
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
  // clase 17 de mayo
  //estoy utilizando un tipo de formulario y para usarlo debo importar un modulo de forms  que me permite usar una directiva de angular que se llama ngModel y lo que hace la directiva es recibir el dato y mostrala en mi html
  //voy a crear una propiedad que reciba el framework favorito inicialmente con un string vacio
  frameworkFavorito: string = "";
  // lo que se pretende es que cuando se de clic en el boton me traiga el contenido del framework que ingreso el usuario 
  mostrarFrameworkFavorito(){
    console.log("mostrar:", this.frameworkFavorito);
    // en este punto no me sale ninguna informacion por que no lo he enlazado
    //para enlazarlo voy al html a mi input 
  }

  //creo esa propiedad que va a ser una nueva instancia de ese formgroup pero para que reciba los datos agrupados debo decirle a formGroup que use el FormControl
  Formulariocredenciales = new FormGroup({
    //pero primero creo las propiedades con el usuario y contrasena diciendo que usuario tiene como instancia un nuevo formcontrol con un string vacio
    usuario: new FormControl(''),
    contrasenia: new FormControl('')
    // debemos crear un metodo para que cuando yo pulse el boton pueda gestionar el manejo de los datos 

  });
  //creamos el metodo manejarenvio()
  manejarEnvio(){
    //que por el momento va a mostrar las credenciales que digito el usuario al dejarlo de esta forma console.log("credenciales", this.Formulariocredenciales); me va a mostrar un formGroup que traer varios datos de la libreria entre esos las credenciales de usuarios y contrasena pero si yo quiero ver solo estos datos al final agrego un .value para que solo me traiga los datos que tengo en mi input quedaria de esta forma console.log("credenciales", this.Formulariocredenciales.value);
    console.log("credenciales", this.Formulariocredenciales.value);
  }
}

//crear un nuevo proyecto de angular
//utilizando un  componente padre y componente hijo montar un contador en donde en pantalla se vean dos botones uno que diga - y otro con un + en medio de esos dos botones se imprima un numero que inicie en 0 cuando yo presione el + se incremente y cuando presione - se decremente, los valores deben estar en el componente padre pero que en el componente padre los datos que se incrementen en el hijo deben verse multiplicados por 2  y en el componente hijo debe estar la interfaz  donde se ven los botones y el contador usando los dos componentes

