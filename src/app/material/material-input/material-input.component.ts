import { Component, OnInit } from '@angular/core';
import {isDigit} from '@angular/compiler/src/chars';
import {tryCatch} from 'rxjs/internal-compatibility';
import {isNumber} from 'util';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    console.log($event);
  }

}
