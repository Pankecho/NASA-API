import { Component, OnInit } from '@angular/core';
import {Apod} from '../shared/model/apod';
import {NasaApiService} from '../shared/service/nasa-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apod: Apod;
  error: string;

  constructor(private apiservice: NasaApiService) { }

  ngOnInit() {
    this.apiservice.getApod().subscribe((value: Apod) => {
      setTimeout(() => {
        this.apod = value;
      }, 1500);
    }, error1 => {
      this.error = 'Error al conectar con el servidor';
      console.log('Error al conectar con el servidor');
    });
  }

}
