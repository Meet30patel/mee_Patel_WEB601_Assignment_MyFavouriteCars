import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})

  constructor() {
    this.contentList = new ContentList();
    this.contentList.addContent({
      id: 1,
      title: 'BMW',
      description: 'Car',
      creator: 'BMW',
      imgURL: '',
      type: 'Car',
      tags: ['1,2']
    });
   
  }
}