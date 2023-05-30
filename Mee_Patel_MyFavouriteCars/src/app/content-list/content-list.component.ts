import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})


export class ContentListComponent {
  contents: any[] = [
    {
      id: 1,
      title: 'BMW',
      description: 'Car',
      creator: 'BMW',
      imgURL: 'https://cdn.motor1.com/images/mgl/1ZpY87/s2/2023-bmw-i7.webp',
      tags: ['1,2']
    },

    {
      id: 2,
      title: 'Nissan Gtr',
      description: 'Car',
      creator: 'Nissan',
      imgURL: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Nissan/Nissan-GTR/744/front-left-side-47.jpg?tr=h-140',
      type: 'Sports',
      tags: ['1,2']
    },

    {
      id: 3,
      title: 'Pagani Zonda',
      description: 'Car',
      creator: 'pagani',
      imgURL: 'https://www.topgear.com/sites/default/files/2021/08/2010-Pagani-Zonda-R-Evolution-_0.jpg',
      type: 'Car',
      tags: ['1,2']
    }
  ];

  searchTitle: string = '';
  searchResult: boolean = false; 
  searchMessage: string = '';
  
  searchByTitle() {
    this.searchResult = this.contents.some(content => content.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.searchMessage = this.searchResult ? `Content with title "${this.searchTitle}" exists.` : `Content with title "${this.searchTitle}" doesn't exist.`;
  }
}
