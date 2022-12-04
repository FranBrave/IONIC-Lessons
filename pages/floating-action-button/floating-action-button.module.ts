import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FloatingActionButtonPageRoutingModule } from './floating-action-button-routing.module';

import { FloatingActionButtonPage } from './floating-action-button.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FloatingActionButtonPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FloatingActionButtonPage]
})
export class FloatingActionButtonPageModule {}
