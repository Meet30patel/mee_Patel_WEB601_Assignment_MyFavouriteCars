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
  carId:number = 8;
  oneCarById: any = {};

  constructor(private CarsServiceService: CarsServiceService){}

  ngOnInit(){
    this.findCarById();
  }

  findCarById(){
    this.CarsServiceService.getCarById(this.carId).subscribe(result => {
      if (typeof result === "object"){
        this.oneCarById = result;
      }
    });
  }
}
