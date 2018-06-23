import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Estudiante} from '../../../shared/model/estudiante';

@Component({
  selector: 'app-item-estudiante',
  templateUrl: './item-estudiante.component.html',
  styleUrls: ['./item-estudiante.component.css']
})
export class ItemEstudianteComponent implements OnInit {

  @Input()
  estudiante: Estudiante;

  // Se establece como emisor del evento de tipo estudiante
  @Output()
  onMouseClick = new EventEmitter<Estudiante>();

  constructor() { }

  ngOnInit() {
  }

  onClick(estudiante: Estudiante){
    //Se emite el estudiante que se seleccione que será transformado en $event
    this.onMouseClick.emit(estudiante);
  }

}
