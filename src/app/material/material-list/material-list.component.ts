import { Component, OnInit } from '@angular/core';
import {Estudiante} from '../../shared/model/estudiante';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiantes: Estudiante[];

  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente MaterialList');
    this.estudiantes = [new Estudiante(1, 'Juan Pablo', 'Oaxaca'),
                        new Estudiante(2, 'Jose', 'Nuevo Leon'),
                        new Estudiante(3, 'Alberto', 'Veracruz')];

    console.log('Total de elementos: ', this.estudiantes.length);
  }

  onMouseClick($event){
    console.log('Click en: ',$event);
  }

}
