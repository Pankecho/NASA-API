import { Injectable } from '@angular/core';
import {Apod} from '../model/apod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = 'kyvKkSN69XRzEzU70M3jA7TYx2VkSFUnieXoyD8D';

@Injectable({
  providedIn: 'root'
})

export class NasaApiService {

  constructor(private client: HttpClient) { }

  getApod(): Observable<Apod> {
    return this.client.get<Apod>(`${URL}?api_key=${API_KEY}`);
  }
}
