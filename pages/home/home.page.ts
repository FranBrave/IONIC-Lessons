import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Observable<Componente[]>

  constructor( private menuCtrl: MenuController,
               private dataService: DataService ) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }

  showMenu() {
    this.menuCtrl.open('first');
  }

}
