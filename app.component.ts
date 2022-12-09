import { Component } from '@angular/core';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  components: Observable<Componente[]>

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOpts();
  }


}