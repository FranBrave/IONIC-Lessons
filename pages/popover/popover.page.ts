import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }


  async presentPopover(e: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: e,
      translucent: true,
      backdropDismiss: false 
    });

    return await popover.present();

    
  }

  
}
