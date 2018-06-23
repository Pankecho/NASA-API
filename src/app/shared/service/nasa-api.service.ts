import { Injectable } from '@angular/core';
import {Apod} from '../model/apod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const URL_APOD = 'https://api.nasa.gov/planetary/apod';
const URL_MARS = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1';
const API_KEY = 'kyvKkSN69XRzEzU70M3jA7TYx2VkSFUnieXoyD8D';

@Injectable({
  providedIn: 'root'
})

export class NasaApiService {

  constructor(private client: HttpClient) { }

  getApod(): Observable<Apod> {
    return this.client.get<Apod>(`${URL_APOD}?api_key=${API_KEY}`);
  }

  getImages(camera: string): Observable<any> {
    return this.client.get(`${URL_MARS}&camera=${camera}&api_key=${API_KEY}`);
  }
}
