import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent {
  contentList: Content[] = [
    {
      id: 1,
      title: 'BMW',
      description: 'Car',
      creator: 'BMW',
      imgURL: 'https://cdn.motor1.com/images/mgl/1ZpY87/s2/2023-bmw-i7.webp',
      type: 'Car',
      tags: ['1,2']
    }
   
  ];

  constructor() {}
}