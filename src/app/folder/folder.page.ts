import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PeticionService} from '../Services/peticion.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  personajes: any[];

  constructor( private peticionService: PeticionService) { }

  ngOnInit() {
    this.peticionService.personajes().subscribe((respuesta: any)=>{
      this.personajes = respuesta.results;
      console.log(this.personajes);
    });
  }

}
