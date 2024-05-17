import { Component, Input, Output,EventEmitter } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';
@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [PadreComponent],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() colorFavorito: string = "";

  @Output() agregarEstudianteEvento: EventEmitter<string> = new EventEmitter<string>();

  agregarEstudianteHijo(){
    this.agregarEstudianteEvento.emit('juanito');
  }
}
