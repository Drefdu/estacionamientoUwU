import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstacionamientojPageRoutingModule } from './estacionamientoj-routing.module';

import { EstacionamientojPage } from './estacionamientoj.page';
import { MenuModule } from '../components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstacionamientojPageRoutingModule,
    MenuModule
  ],
  declarations: [EstacionamientojPage]
})
export class EstacionamientojPageModule {}
