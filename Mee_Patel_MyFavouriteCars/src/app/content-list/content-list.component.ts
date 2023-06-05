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
      description: 'sports',
      creator: 'Nissan',
      imgURL: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Nissan/Nissan-GTR/744/front-left-side-47.jpg?tr=h-140',
      type: 'Sports',
      tags: ['1,2']
    },

    {
      id: 3,
      title: 'Pagani Zonda',
      description: 'sports',
      creator: 'pagani',
      imgURL: 'https://www.topgear.com/sites/default/files/2021/08/2010-Pagani-Zonda-R-Evolution-_0.jpg',
      type: 'Sports',
      tags: ['1,2']
    },

    {
      id: 4,
      title: 'cadilac SUV',
      description: 'Car',
      creator: 'cadilac',
      imgURL: 'https://www.cadillaccanada.ca/content/dam/cadillac/na/canada/english/index/crossover-suvs/2023-escalade/jellybean/vehicles-suvs-23-escalade.png?imwidth=960',
      type: 'Car',
      tags: ['1,2']
    },

    {
      id: 5,
      title: 'G-wagon',
      description: 'Car',
      creator: 'mercedes',
      imgURL: 'https://www.motortrend.com/uploads/2022/02/2022-Mercedes-Benz-G-Class-AMG-G63-22.jpg?fit=around%7C875:492.1875',
      type: 'Car',
      tags: ['1,2']
    },

    {
      id: 6,
      title: 'lambo gallardo',
      description: 'sports',
      creator: 'lambo',
      imgURL: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/masterpieces/gallardo-2003/HEADER.jpg',
      type: 'Sports',
      tags: ['1,2']
    },

    {
      id: 7,
      title: 'lambo urus',
      description: 'Car',
      creator: 'lambo',
      imgURL: 'https://www.motortrend.com/uploads/2022/10/2023-Lamborghini-Urus-Performante-31.jpg?fit=around%7C875:492.1875',
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
