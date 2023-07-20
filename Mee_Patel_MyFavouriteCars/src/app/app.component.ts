import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { CarsServiceService } from './services/cars-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Mee_Patel_MyFavouriteCars';
  songId:number = 8;
  oneSongById: any = {};

  constructor(private CarsServiceService: CarsServiceService){}

  ngOnInit(){
    this.findSongById();
  }

  findSongById(){
    this.CarsServiceService.getSongById(this.songId).subscribe(result => {
      if (typeof result === "object"){
        this.oneSongById = result;
      }
    });
  }
}
