import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CarsServiceService } from '../services/cars-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent {
  contents: Content[] = [];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  defaultSong: string = 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/masterpieces/gallardo-2003/HEADER.jpg';

  constructor(private CarsServiceService: CarsServiceService){
    
  }

  ngOnInit() {
    this.CarsServiceService.getSongs().subscribe(Cars => this.contents = Cars );
  }

  searchByTitle() {
    const matchingSong = this.contents.find(song => song.title.toLowerCase() === this.searchTitle.toLowerCase());
    const cardElements = document.querySelectorAll(`div.card`);
    if(matchingSong){
      this.titleFound = true;
      cardElements.forEach(card => {
        if(parseInt(card.id) === matchingSong.id){
          card.classList.add('matched');
        } else {
          card.classList.remove('matched');
        }
      });
    } else {
      this.titleFound = false;
      cardElements.forEach(card => card.classList.remove('matched'));
    }
  }
}