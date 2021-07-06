import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeticionService} from '../Services/peticion.service';

@Component({
  selector: 'app-emaporfavorpaseme',
  templateUrl: './emaporfavorpaseme.page.html',
  styleUrls: ['./emaporfavorpaseme.page.scss'],
})
export class EmaporfavorpasemePage implements OnInit {

  gijei: number;
  persona: any;
  constructor(private route: ActivatedRoute, private peticionService: PeticionService) { }

  ngOnInit() {
    this.gijei = this.route.snapshot.params.id;
    console.log(this.gijei);
    this.peticionService.personaje(this.gijei).subscribe((respuesta: any)=>{
      this.persona = respuesta;
    });
  }

}
