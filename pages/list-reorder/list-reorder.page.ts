import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  characters: string[] = ['Spiderman', 'Iron Man', 'Thor', 'Hulk', 'Ant Man'];
  reorderDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  handleReorder(event: CustomEvent<ItemReorderEventDetail>)  {
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    const itemMove = this.characters.splice(event.detail.from, 1 ) [0];
    this.characters.splice(event.detail.to, 0, itemMove)

    event.detail.complete();

    console.log(this.characters);
    
  }

}
