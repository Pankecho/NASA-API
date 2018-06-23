import {Component, Input, OnInit} from '@angular/core';
import {isDigit} from '@angular/compiler/src/chars';
import {tryCatch} from 'rxjs/internal-compatibility';
import {isNumber} from 'util';
import {Estudiante} from '../../shared/model/estudiante';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  usuario: Estudiante;

  constructor() { }

  ngOnInit() {
    this.usuario = new Estudiante(1,'Juan','Oaxaca');
  }

  onChange($event) {
    console.log($event);
  }

}
