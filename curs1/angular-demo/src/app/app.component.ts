import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { AlertaService } from './alerta.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title:string = 'angular-demo 2023';
  imageSrc:string = "https://cdn.vectorstock.com/i/1000x1000/87/48/cute-little-girl-dressed-as-a-superhero-vector-8638748.webp";
  nr:number = 0;
  valoare:string = "Valorea input";
  afiseaza:boolean = true;

    constructor(private alertaService:AlertaService) {
      
    }

  showImg(){
    if(this.imageSrc !== '' ){
      this.imageSrc = '';
    } else {
      this.imageSrc = "https://cdn.vectorstock.com/i/1000x1000/87/48/cute-little-girl-dressed-as-a-superhero-vector-8638748.webp";
    }
  }

  showImg2(){
    this.afiseaza = !this.afiseaza;
  }

  inputCount(){
    if(this.valoare.length >= 20){
      this.alertaService.afiseazaMesaj('Salut')
    }
  }
}
