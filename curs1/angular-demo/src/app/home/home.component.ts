import { Component } from '@angular/core';
import { User } from '../model/user';

const heroes = [
  { id:1, name: 'Superman'},
  { id:2, name: 'Batman'},
  { id:3, name: 'WonderWomen'},
  { id:4, name: 'SpiderMan'},
  { id:5, name: 'IronMan'}
]



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  descriere:string = 'Scurta descriere';
  colorR:string = "red";
  eroi = heroes;

  user: User = {
    id: 1,
    nume: "catalin",
    prenume: "tanase",
    telefon: "0762563838"
  }
}
