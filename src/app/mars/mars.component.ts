import { Component, OnInit } from '@angular/core';
import {MarsImage} from '../shared/model/mars-image';
import {NasaApiService} from '../shared/service/nasa-api.service';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  marsImages: MarsImage[];

  currentCamera: string;

  loading: boolean;

  cameras: string[] = ['FHAZ', 'RHAZ', 'CHEMCAM', 'NAVCAM'];

  constructor(private cliente: NasaApiService) { }

  ngOnInit() {
    this.currentCamera = this.cameras[0];
    this.refresh(this.currentCamera);
  }

  onSelect(camera: string){
    this.refresh(camera);
  }

  private refresh(camera: string) {
    this.loading = true;
    this.cliente.getImages(camera).subscribe(value => {
      this.marsImages = value.photos;
      this.loading = false;
    });
  }

}
