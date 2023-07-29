import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  @Input() car: any;
  @Input() class: string = '';
  defaultCar: string = 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/masterpieces/gallardo-2003/HEADER.jpg'

  handleClick(content: Content){
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }
}