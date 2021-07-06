import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {
  baseUril = 'https://rickandmortyapi.com/api/';
  constructor(private httpClient: HttpClient) { }

  personajes()
  {
    return this.httpClient.get(this.baseUril+'character');
  }

  personaje(id)
  {
    return this.httpClient.get(this.baseUril+'character/'+id);
  }
}
