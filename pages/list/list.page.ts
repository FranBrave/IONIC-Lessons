import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


  users: Observable<any>

  @ViewChild(IonList) IonList: IonList;

  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.users = this.dataService.getUsers();

  }


  share(user: any) {
    console.log('share', user);
    this.IonList.closeSlidingItems();
  }

  favorite(user: any) {
    console.log('favorite', user);
    this.IonList.closeSlidingItems();
  }

  delete(user: any) {
    console.log('delete', user.name);
    this.IonList.closeSlidingItems();
  }


}
