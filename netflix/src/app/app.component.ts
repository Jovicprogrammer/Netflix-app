import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuOpened = false;

  ListTitles = [{
    trailer: 'assets/videos/Pearltrailer.mp4',
    cover: 'assets/images/pearl.jpg',
    name: 'Pearl',
    relevance: 98, 
    age: 18,
    parts: 1,
    categories: ['Horror', 'Drama de Época', 'Estudo de Personagem']
  }, {
    trailer: 'assets/videos/Draculatrailer.mp4',
    cover: 'assets/images/dracula.jpg',
    name: 'Dracula',
    relevance: 89, 
    age: 12,
    parts: 1,
    categories: ['Horror', 'Gótico', 'Clássico']
  }, {
    trailer: 'assets/videos/EvilDeadtrailer.mp4',
    cover: 'assets/images/evildead.jpg',
    name: 'Evil Dead',
    relevance: 90, 
    age: 14,
    parts: 3,
    categories: ['Horror', 'Comédia', 'Alucinante']
  }, {
    trailer: 'assets/videos/sweeneytoddtrailer.mp4',
    cover: 'assets/images/sweeneytodd.jpg',
    name: 'Sweeney Todd',
    relevance: 78, 
    age: 16,
    parts: 1,
    categories: ['Horror', 'Drama de Época', 'Musical']
  }, 
  {
    trailer: 'assets/videos/Texas_trailer.mp4',
    cover: 'assets/images/chainsaw.jpg',
    name: 'O Massacre da Serra Elétrica',
    relevance: 92, 
    age: 16,
    parts: 1,
    categories: ['Horror', 'Clássico', 'Enervante']
  }, {
    trailer: 'assets/videos/thevvitchtrailer.mp4',
    cover: 'assets/images/thevvitch.jpg',
    name: 'A Bruxa',
    relevance: 94, 
    age: 16,
    parts: 1,
    categories: ['Horror', 'Drama de Época', 'Fantasia']
  }];

  setMenuState(state: boolean) {
  this.menuOpened = state;
  }


  closeMenu() {

    this.menuOpened = false; 

  } 
  
}




